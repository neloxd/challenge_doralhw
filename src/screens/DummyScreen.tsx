import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import theme from '@app/theme/theme';
import TextDescriptionPDP from '@app/components/TextDescriptionPDP';
import DeliveryTypePDP from '@app/components/DeliveryType';
import PDPProductSection from '@app/components/PDPPRoductSection/index';
import SectionIcon from '@app/assets/icons/section_icon.svg';
import HomeHeaderComponent from '@app/components/HomeHeader';
import {HomeCarousel} from '@app/components/Banner';
import WeOffer from '@app/components/WeOffer';
import OffersSection from '@app/components/OffersSection';
import useStyles from '@app/components/TermsAndConditions/styles';

const DummyScreen = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={dummyStyles.container}>
      <ScrollView
        style={dummyStyles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <HomeHeaderComponent />
        <HomeCarousel />
        <OffersSection />
        <WeOffer ID={'2U6cLelasWpkRWKFIl3wv'} title="Te ofrecemos" />
        <TextDescriptionPDP
          title="GRUNENTHAL"
          description="Norspan 5mcg/Hora Buprenorfina 5 mcg 2 Parches"
        />
        <DeliveryTypePDP />
        <PDPProductSection
          iconImage={<SectionIcon />}
          text={'Información Producto'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DummyScreen;

const dummyStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  scrollContainer: {
    width: '100%',
  },
});
