import theme from '@app/theme/theme';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Margin from '../Margin';
import {WeOfferProps} from '@app/types/components/weOffer';
import useContentful from '@app/context/useContentful';
import {ContentfulResponse} from '@app/types/contenful';

import useStyles from './styles';
import TitleSection from '../TitleSection';

const WeOffer = ({ID, title}: WeOfferProps) => {
  const styles = useStyles();
  const [isLoading, setisLoading] = useState(false);

  const getData = async () => {
    setisLoading(true);
    try {
      const entries = await contentfulClient.getEntry<ContentfulResponse>(ID);
      const sanitizedEntries = (entries.fields.blocks as any[]).map(item => {
        return item.fields.image.fields;
      });
      setisLoading(false);
      return sanitizedEntries;
    } catch (err) {
      setisLoading(false);
      console.log(`Error fetching getData: ${err}`);
    }
  };

  const {contentfulClient} = useContentful();

  const [imgData, setImgData] = useState<any>([]);

  useEffect(() => {
    getData().then(response => {
      if (Array.isArray(response)) {
        const imageSources = response.map(uri => ({
          uri: `https:${uri?.file?.url}`,
          title: uri?.title,
        }));
        setImgData(imageSources);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return imgData && !isLoading ? (
    <View style={styles.container}>
      <TitleSection title={title} hasArrow={false} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        horizontal>
        <View style={styles.row}>
          {imgData?.map((item: any, i: number) => (
            <View
              style={styles.card}
              key={`key-${i}-${item.title}-${item.uri}`}>
              <TouchableOpacity>
                <Image
                  source={{uri: item?.uri}}
                  resizeMode="cover"
                  style={styles.image}
                />
                <Margin bottom={5} />
                <Text style={styles.text}>{item?.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  ) : isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator size={'small'} color={theme.colors.black} />
    </View>
  ) : null;
};

export default WeOffer;
