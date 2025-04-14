/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-20 09:30:58
 * @desc Products Screen
 */

import React, {useEffect, useLayoutEffect, useCallback, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import ProductList from '@app/components/ProductList';
import {RootStackParams} from '@app/navigation/RootStackParams';
import {Routes} from '@app/navigation/types';
import {getProducts, searchProducts} from '@app/services/products';
import {
  formatProductlistData,
  FormattedProductData,
} from '@app/utils/formatUtils';

import useStyles from './styles';

interface Props extends StackScreenProps<RootStackParams, Routes.PRODUCTS> {}

const Products = ({route, navigation}: Props) => {
  const styles = useStyles();
  const [products, setProducts] = useState<FormattedProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {cgid, headerTitle} = route.params;

  const handleGetProducts = useCallback(() => {
    setIsLoading(true);
    searchProducts({refine: [`cgid=${cgid}`]})
      .then(({data: {hits}}) => {
        const productsIds = hits.map((product: any) => product.productId);
        getProducts(productsIds)
          .then(resp => {
            setProducts(formatProductlistData(resp.data));
            setIsLoading(false);
          })
          .catch(err => console.error(err));
      })
      .catch(error => console.error(error));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle,
    });
  }, [navigation, headerTitle]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {!isLoading && <ProductList verticalProducts data={products} />}
      </View>
    </SafeAreaView>
  );
};

export default Products;
