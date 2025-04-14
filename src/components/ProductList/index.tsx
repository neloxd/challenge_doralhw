import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {FormattedProductData} from '@app/utils/formatUtils';
import {ProductListProps} from '@app/types/components/ProductCard';

import ProductCard from '../ProductCard';
import useStyles from './styles';

const ProductList = ({data, verticalProducts}: ProductListProps) => {
  const styles = useStyles();

  const renderItem = ({item}: ListRenderItemInfo<FormattedProductData>) => {
    return (
      <ProductCard
        productId={item.id}
        productImage={item.images[0].link}
        productBrand={item.brand}
        productName={item.name}
        campaignTag=""
        productCount={item.stock}
        price={item.prices['price-list-mx'].toString()}
        discountPrice=""
        isVertical={verticalProducts}
      />
    );
  };

  return (
    <FlatList<FormattedProductData>
      {...(verticalProducts && {columnWrapperStyle: styles.colum})}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => `key-${item.id}-${item.name}`}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
      numColumns={verticalProducts ? 2 : 1}
    />
  );
};

export default ProductList;
