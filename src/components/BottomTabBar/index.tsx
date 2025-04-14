import React from 'react';
import {View} from 'react-native';
import type {BottomTabBarProps as ReactNavigationBottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {ScreenValue} from '@app/navigation/types';
import {
  toBottomBarRouteName,
  toBottomBarSourceImage,
} from '@app/navigation/utils';

import TabBarItem from '../TabBarItem';
import useStyles from './styles';

export interface BottomNavigationComponentProps {
  status: BottomNavigationComponentStatus;
}

export enum BottomNavigationComponentStatus {
  Default = 'Default',
  Active = 'Active',
}

type BottomTabBarProps = ReactNavigationBottomTabBarProps;

const BottomTabBar = ({
  state: {routeNames, index: selectedTab},
  navigation,
}: BottomTabBarProps) => {
  const styles = useStyles();
  const {bottom} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.tabsContainer, {paddingBottom: bottom}]}>
        {routeNames.map((routeName, index) => (
          <TabBarItem
            sourceType={toBottomBarSourceImage(routeName as ScreenValue)}
            key={routeName}
            title={toBottomBarRouteName(routeName as ScreenValue)}
            isSelected={selectedTab === index}
            onPress={() => navigation.navigate(routeName)}
          />
        ))}
      </View>
    </>
  );
};

export default BottomTabBar;
