import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from '@app/components/BottomTabBar';
import {Routes} from './types';
import Home from '@app/screens/Home';
import DummyScreen from '@app/screens/DummyScreen';
import {inferRoute} from '@app/utils/navUtils';

const TabStack = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <TabStack.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      {inferRoute(TabStack)(Routes.HOME_SCREEN, Home)}
      {inferRoute(TabStack)(Routes.ACCOUNT, DummyScreen)}
      {inferRoute(TabStack)(Routes.PHARMACY, DummyScreen)}
      {inferRoute(TabStack)(Routes.OFFERS, DummyScreen)}
    </TabStack.Navigator>
  );
}
