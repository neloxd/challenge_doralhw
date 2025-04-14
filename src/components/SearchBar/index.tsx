import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import SearchIcon from '@app/assets/icons/Busqueda.svg';
import SearchCancelIcon from '@app/assets/icons/searchCancel.svg';
import theme from '@app/theme/theme';
import {ProductSearchHit, SearchProps} from '@app/types/components/Search';
import Alert from '@app/assets/icons/Alert.svg';

import ProductCard from '../ProductCard';
import BlankStateView from './BlankState';
import useStyles from './styles';
import Margin from '../Margin';
import {searchProducts} from '@app/services/products';

const SearchView = ({setIsModalVisible}: SearchProps) => {
  const styles = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef<TextInput | null>(null);
  const initialProducts: ProductSearchHit[] = [];
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setisLoading] = useState(false);
  const widhtNumber = 267;
  const widhtConstant = 'auto';

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    setSearch('');
    setProducts([]);
  };

  const handleChangeText = (text: string) => {
    setSearch(text);
    if (text !== '' && text.length > 2) {
      searchResponse(text);
    } else if (text.length === 0) {
      setProducts([]);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const searchResponse = async (text: string) => {
    setisLoading(true);
    const response = await searchProducts({
      q: text,
    });
    if (response != null && response.data.hits != null) {
      setProducts(response.data.hits);
    } else {
      setProducts([]);
    }
    setisLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchBar
        blurOnSubmit
        ref={searchRef}
        platform="ios"
        placeholder="Busca aquí"
        onChangeText={handleChangeText}
        onClear={handleClear}
        value={search}
        searchIcon={<SearchIcon />}
        clearIcon={
          <TouchableOpacity onPress={handleClear}>
            <SearchCancelIcon />
          </TouchableOpacity>
        }
        onCancel={handleCancel}
        cancelButtonTitle="Cancelar"
        inputStyle={styles.inputText}
        inputContainerStyle={{
          ...styles.container,
          backgroundColor: isFocused ? theme.colors.white : theme.colors.iron,
          borderColor: isFocused ? theme.colors.apple : theme.colors.iron,
          width: isFocused ? widhtNumber : widhtConstant,
        }}
        cancelButtonProps={styles.disableButton}
        leftIconContainerStyle={styles.searchIcon}
        rightIconContainerStyle={styles.clearIcon}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        showCancel={true}
      />
      <View style={styles.resultsContainer}>
        {search.length > 2 && !isLoading && products.length !== 0 && (
          <>
            <Text style={styles.textResult}>Resultados de búsqueda para </Text>
            <Text style={styles.textSearch}>"{search}"</Text>
          </>
        )}
        {search.length > 2 && products.length === 0 && !isLoading && (
          <>
            <Text style={styles.textResult}>No hay resultados para </Text>
            <Text style={styles.textSearch}>"{search}"</Text>
          </>
        )}
      </View>
      {products.length > 0 ? (
        <ScrollView
          onScroll={() => Keyboard.dismiss()}
          style={styles.cardsContainer}>
          {products.map((product: ProductSearchHit) => (
            <View key={`key-card-item-${product.productId}`}>
              <ProductCard
                key={product.productId}
                productImage={product.image?.link}
                productBrand={''}
                productName={product.productName}
                campaignTag={''}
                productCount={product.stock ?? 0}
                price={!product?.price ? '0' : String(product?.price)}
                productId={product.productId}
                discountPrice={''}
                isVertical={false}
                onPress={setIsModalVisible}
              />
              <Margin bottom={8} />
            </View>
          ))}
        </ScrollView>
      ) : search.length > 2 && !isLoading ? (
        <BlankStateView
          icon={<Alert />}
          title="Lo Sentimos"
          description="No hay resultados para tu Búsqueda"
        />
      ) : null}
      {isLoading && <ActivityIndicator size={'small'} color={'black'} />}
    </SafeAreaView>
  );
};

export default SearchView;
