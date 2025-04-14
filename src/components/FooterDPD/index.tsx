/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-04 10:04:48
 */

import React from 'react';
import {View} from 'react-native';
import IcBag from '@app/assets/icons/ic_bag.svg';
import {FooterPDPProps} from '@app/types/components/FooterDPD';

import CustomButton from '../CustomButton';
import Price from '../Price';
import Margin from '../Margin';
import useStyles from './styles';

const FooterDPD = ({listPrice, priceOffer}: FooterPDPProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Price price={listPrice} discountPrice={priceOffer} />
      </View>
      <Margin bottom={16} />
      <CustomButton
        primary
        title="Agregar a la Bolsa"
        onPress={() => ({})}
        leftIcon={IcBag}
      />
    </View>
  );
};

export default FooterDPD;
