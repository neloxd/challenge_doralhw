import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {Routes} from '@app/navigation/types';
import {appScreensNavOptions} from '@app/navigation/navigationConfig';
import {Navigation} from '@app/types/navigation';

export function inferRoute(NavigationStructure: any) {
  return function screenComponent(screenName: Routes, component: any) {
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={component}
        options={appScreensNavOptions[screenName]}
      />
    );
  };
}

export const onResetStack = (
  navigation: Navigation['navigation'],
  nextRoutes: {name: string; params?: any}[],
  initialRoute = Routes.HOME,
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: initialRoute}, ...nextRoutes],
    }),
  );
};
