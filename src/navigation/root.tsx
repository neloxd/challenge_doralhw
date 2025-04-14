import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {RootStackParams} from '@app/navigation/RootStackParams';
import {inferRoute} from '@app/utils/navUtils';
import {
  authStackNavConfig,
  appStackNavConfig,
} from '@app/navigation/navigationConfig';
import {useAppSelector} from '@app/redux/hooks';

import Categories from '@app/screens/Categories';
import SubCategory from '@app/screens/SubCategory';
import Login from '@app/screens/Login';
import Register from '@app/screens/Register';
import Products from '@app/screens/Products';
import Pdp from '@app/screens/Pdp';

import {BottomTabNavigator} from './tabNavigator';
import {Routes} from './types';

const MainStack = createStackNavigator<RootStackParams>();

const AuthStack = () => (
  <>
    {inferRoute(MainStack)(Routes.LOGIN, Login)}
    {inferRoute(MainStack)(Routes.REGISTER, Register)}
  </>
);

const AppStack = () => (
  <>
    {inferRoute(MainStack)(Routes.HOME, BottomTabNavigator)}
    {inferRoute(MainStack)(Routes.CATEGORY, Categories)}
    {inferRoute(MainStack)(Routes.SUBCATEGORY, SubCategory)}
    {inferRoute(MainStack)(Routes.PRODUCTS, Products)}
    {inferRoute(MainStack)(Routes.PDP, Pdp)}
  </>
);

const AppNavigator = () => {
  const {currentUser} = useAppSelector(state => state.user);
  const defaultStackConfig = currentUser
    ? appStackNavConfig
    : authStackNavConfig;

  return (
    <NavigationContainer>
      <MainStack.Navigator {...defaultStackConfig}>
        {currentUser ? AppStack() : AuthStack()}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
