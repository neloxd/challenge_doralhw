import { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import DateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker';

import useStyles from './styles';
import { NetworkStatus } from '@app/utils/network';
import { useFocusEffect } from '@react-navigation/native';
import { invokeApiData } from '@app/apiclient/FeedClient';
import type { ApiResponse } from '@app/types/components/ApiResponse';
import type { ApiErrorResponse } from '@app/types/components/ApiResponseError';
import { LanguageSelector } from '@app/components/LanguageSelector';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PropsItem {
    tid: string;
    title: string;
    description: string;
    url: string;
}

export const Home = () => {
  const TAG = 'HOME';
  const styles = useStyles();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [date, setDate] = useState<Date>();
  const currentDate = new Date();
  const [selectedLanguage, setSelectedLanguage] = useState<string>();
  const [showPicker, setShowPicker] = useState(false);
  const [data, setData] = useState<PropsItem[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [viewedCards, setViewedCards] = useState([]);
  const [isNotConnected, setIsNotConnected] = useState<boolean>(false);
  const isFocus = useFocusEffect;

  const networkStatus = NetworkStatus(setIsNotConnected);

   const onChangeDate = useCallback((selectedDate?: Date) => {
    setDate(selectedDate);
    setShowPicker(false);
    }, []);

  const onRefresh = async () => {
    console.log('onRefresh invoke');
    setRefreshing(true);
    if(selectedLanguage && date) {
      await fetchData(date, selectedLanguage);
    } else {
      setRefreshing(false);
    }
  };

  const mapperData = useCallback((tid: string, title: string, description: string, image: string) => {
    console.log(TAG, "0mapperData");
    const value: PropsItem = {
      tid: tid,
      title: title,
      url: image,
      description: description,
    }
    setData(prevData => [...prevData, value]);
  },[])

  const showToast = useCallback((typeError: string, message: string, type = 'error') => {
    Toast.show({
      text1: typeError,
      text2: message,
      visibilityTime: 3000,
      position: 'bottom', // can be: top, bottom o center
      type: type,
    });
  }, []);

  const fetchData = useCallback(async (selectedDate: Date, selectedLanguage: string) => {
    //ar (Arabic), en (English), es (Spanish)
    console.log('fetchData', `selectedDate:${selectedDate} - selectedLanguage:${selectedLanguage}`);
    const formattedDate = selectedDate.toISOString().slice(0, 10).replace(/-/g, '/');
    try {
      const result = await invokeApiData(formattedDate, selectedLanguage)
      if (isApiResponse(result)) {
        mapperData(result.image.wb_entity_id, result.image.title, result.image.description.text, result.image.thumbnail.source);
      } else {
        console.log('API ERROR', JSON.stringify(result));
        showToast('API ERROR', result.detail);
      }
    } 
    catch(error) {
      console.log(TAG, `error:${error}`);
      let errorMessage = 'An unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      showToast('UNKNOWN ERROR', errorMessage);
    } finally {
      setisLoading(false);
    }  
    setRefreshing(false);
  }, [mapperData, showToast]);

  const isApiResponse = (response: ApiResponse | ApiErrorResponse): response is ApiResponse => {
    return (response as ApiResponse).image !== undefined && (response as ApiResponse).image != null;
  };

  const markAsViewed = async () => {
    /*
    await AsyncStorage.setItem('viewedCards', JSON.stringify(updatedViewedCards));
    */
  };

  const renderItem = (item: PropsItem) => (
    <TouchableOpacity
      style={[styles.card]}
      onPress={() => markAsViewed()}
    >
      {item.url && (
        <Image source={{ uri: item.url }} style={styles.thumbnail} />
      )}
      <Text style={styles.title} numberOfLines={2} >{item.title}</Text>
      <Text style={styles.description} numberOfLines={10}>{item.description}</Text>
    </TouchableOpacity>
  );

  const onPressData = async () => {
    if(!isLoading) {
      if(!selectedLanguage) {
        showToast('CHALLENGE', 'Please, select a language', 'info');
        return;
      }

      if(!date) {
        showToast('CHALLENGE', 'Please, select a date', 'info');
        return;
      }

      setisLoading(true);
      await fetchData(date, selectedLanguage);
      setisLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LanguageSelector onSelectLanguage={setSelectedLanguage}  languageSelected={selectedLanguage}/>
      <Button title="Select Date" onPress={() => setShowPicker(true)} />
        {date && (
                <Text style={styles.label}>{date && `Selected Date: ${date?.toLocaleDateString()}`}</Text>
        )}
      {showPicker && (
        <DateTimePicker
          value={currentDate}
          mode="date"
          display="default"
          onChange={(e, date) => {onChangeDate(date)}} />
      )}

      <View style={styles.separator}>
      <Button title="Search" onPress={onPressData} />
      </View>


    {data.length > 0 && 
      <View style={styles.container}>
        <FlatList<PropsItem>
          data={data}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={(item) => renderItem(item.item)}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `key-${item.tid}-${item.url}`}
          showsVerticalScrollIndicator={false}
          />
      </View>
    }

    <Toast />
    <View style={styles.container}>
      <Text style={[styles.label, { color: !isNotConnected ? 'green' : 'red' }]}>
        {!isNotConnected ? 'Conectado' : 'Sin conexión'}
      </Text>
    </View>
    
    {isLoading && <ActivityIndicator size={'small'} color={'black'} style={styles.separator}/>}

    </View>
  );
};

