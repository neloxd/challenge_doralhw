/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-09 10:04:48
 */

import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '@app/theme/theme';
import {Props} from '@app/types/components/Price';

import useStyles from './styles';

const Price = ({price, discountPrice, isVertical, isSmallSize}: Props) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, isVertical && styles.containerVertical]}>
      {discountPrice ? (
        <>
          <Text
            style={[
              styles.priceLine,
              isSmallSize && styles.priceSmall,
            ]}>{`$${price}`}</Text>
          <View style={styles.priceOfferContainer}>
            <Text
              style={[
                styles.priceOffer,
                isSmallSize && styles.priceOfferSmall,
              ]}>{`$${discountPrice}`}</Text>
            <LinearGradient
              colors={[theme.colors.navy_blue, theme.colors.azure_radiance]}
              useAngle
              angle={25}
              style={styles.priceOfferTagContainer}>
              <Text
                style={[
                  styles.priceOfferTag,
                  isSmallSize && styles.priceOfferTagSmall,
                ]}>
                OFERTA
              </Text>
            </LinearGradient>
          </View>
        </>
      ) : (
        <>
          <Text style={[styles.price, isSmallSize && styles.priceSmall]}>
            Llévalo por
          </Text>
          <View style={styles.priceOfferContainer}>
            <Text
              style={[
                styles.priceOffer,
                isSmallSize && styles.priceOfferSmall,
              ]}>{`$${price}`}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Price;
