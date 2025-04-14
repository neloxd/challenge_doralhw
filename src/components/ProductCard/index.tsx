/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-09 10:34:21
 * @desc Product Card component
 */

import React, {useCallback} from 'react';
import {TouchableOpacity, Text, View, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import theme from '@app/theme/theme';
import ShoppingBag from '@app/assets/icons/ShoppingBag.svg';
import {Props} from '@app/types/components/ProductCard';
import {Routes} from '@app/navigation/types';

import CustomButton from '../CustomButton';
import Price from '../Price';
import useStyles from './styles';

const ProductCard = ({
  productImage,
  productBrand,
  productName,
  campaignTag,
  productCount,
  price,
  discountPrice,
  isVertical,
  productId,
  onPress,
}: Props) => {
  const styles = useStyles();
  const navigation = useNavigation<any>();

  const handlePress = useCallback(() => {
    navigation.navigate(Routes.PDP, {id: productId});
    onPress && onPress(false);
  }, [onPress, navigation]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, isVertical && styles.containerVertical]}>
      {isVertical && !!campaignTag.length && (
        <LinearGradient
          colors={[theme.colors.apple, theme.colors.screamin_green]}
          useAngle
          angle={25}
          style={styles.campaignTag}>
          <Text style={styles.campaignTagText}>{campaignTag}</Text>
        </LinearGradient>
      )}
      <View
        style={[
          styles.productImage,
          isVertical && styles.productImageVertical,
        ]}>
        <FastImage source={{uri: productImage}} style={styles.productImage} />
        {productCount > 0 && !isVertical && (
          <TouchableOpacity onPress={handlePress} style={styles.btnAddProduct}>
            <ShoppingBag style={styles.iconBag} />
          </TouchableOpacity>
        )}
        {!productCount && (
          <View
            style={[
              styles.containerNoStockContainer,
              isVertical && styles.containerNoStockContainerVertical,
            ]}>
            <View style={styles.noStockContainer}>
              <Text style={styles.noStockText}>Sin stock Online</Text>
            </View>
          </View>
        )}
      </View>
      <View
        style={[
          styles.productDescription,
          isVertical && styles.productDescriptionVertical,
        ]}>
        <View>
          <Text
            style={[
              styles.productBrand,
              isVertical && styles.productBrandVertical,
            ]}>
            {productBrand}
          </Text>
          <Text
            style={[
              styles.productName,
              isVertical && styles.productNameVertical,
            ]}
            numberOfLines={isVertical ? 3 : 2}
            ellipsizeMode="tail">
            {productName}
          </Text>
        </View>
        <Price
          isSmallSize
          price={price}
          discountPrice={discountPrice}
          isVertical={isVertical}
        />
      </View>
      {isVertical && (
        <CustomButton
          primary
          title="Agregar"
          onPress={() => ({})}
          disabled={!productCount}
          style={styles.addBtn}
        />
      )}
    </TouchableOpacity>
  );
};

export default ProductCard;
