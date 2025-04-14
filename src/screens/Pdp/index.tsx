/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useIsFocused} from '@react-navigation/native';

import DeliveryTypePDP from '@app/components/DeliveryType';
import FooterDPD from '@app/components/FooterDPD';
import PDPProductSection from '@app/components/PDPPRoductSection';
import TextDescriptionPDP from '@app/components/TextDescriptionPDP';
import {HeaderPDP} from '@app/components/HeaderPDP';
import SectionIcon from '@app/assets/icons/section_icon.svg';
import ProductImages from '@app/components/ProductImages';
import Margin from '@app/components/Margin';
import apiClient from '@app/api/APIClient';
import {constants} from '@app/constants';

import {RootStackParams} from '@app/navigation/RootStackParams';
import {Routes} from '@app/navigation/types';

import useStyles from './styles';

interface PdpProps extends StackScreenProps<RootStackParams, Routes.PDP> {}

const Pdp = ({navigation, route}: PdpProps) => {
  const styles = useStyles();
  const productId = route?.params?.id;
  const [productInfo, setproductInfo] = useState<any>(null);
  const [productImages, setproductImages] = useState<any[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const pricesMX = 'price-list-mx';
  const focus = useIsFocused();

  useEffect(() => {
    if (focus && productId) {
      getDetails();
    }
  }, [focus]);

  const getDetails = async () => {
    setisLoading(true);
    let images: any[] = [];
    const res = await apiClient(constants.endpoints.PRODUCT_SERVICE_URL).get(
      `/products/product-summary?checkWishList=true&ids[]=${productId}&fields=brand&fields=name&fields=prices&fields=promotions&fields=images&fields=prescriptionModel&fields=isBioequivalent&fields=stock&fields=homeDelivery&fields=storePickup`,
    );
    res.data[productId]?.images.map((item: any, index: any) => {
      images.push({
        id: index,
        image: item?.link,
        selected: index === 0 ? true : false,
      });
    });
    setproductImages(images);
    setproductInfo(res.data[productId]);
    setisLoading(false);
  };

  return !isLoading ? (
    <>
      <HeaderPDP
        title={productInfo?.name}
        navigation={navigation}
        backIcon
        shoppingIcon
      />
      <ScrollView>
        <View style={styles.container}>
          <ProductImages images={productImages} />
          <TextDescriptionPDP
            title={productInfo?.brand}
            description={productInfo?.name}
          />
          <Margin bottom={30} />
          <DeliveryTypePDP
            delivery={productInfo?.homeDelivery}
            pickup={productInfo?.storePickup}
            prescription={productInfo?.prescriptionModel}
          />
          <Margin bottom={10} />
          <PDPProductSection
            iconImage={<SectionIcon />}
            text={'Información Producto'}
          />
          <FooterDPD
            listPrice={productInfo?.prices[pricesMX]}
            priceOffer={null}
          />
        </View>
      </ScrollView>
    </>
  ) : (
    <View style={styles.loadingcontainer}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  );
};

export default Pdp;
