import React from 'react';
import {View} from 'react-native';
import SearchBarComponent from '@app/components/HomeHeader/components/SearchBar';
import HamburgerMenu from '@app/assets/icons/HamburgerMenu.svg';
import ShoppingBag from '@app/assets/icons/ShoppingBag.svg';
import {SCREEN_WIDTH} from '@app/constants/platform';

import useStyles from './styles';

function HomeHeader() {
  const styles = useStyles();
  return (
    <View>
      <View style={[styles.container, {width: SCREEN_WIDTH}]}>
        <HamburgerMenu />
        <View style={styles.spacer} />
        <ShoppingBag />
      </View>
      <SearchBarComponent />
    </View>
  );
}

export default HomeHeader;
