import {ScreenValue} from './types';
import homeIcon from '@app/assets/icons/ic_home_tab.svg';
import profileIcon from '@app/assets/icons/ic_profile_tab.svg';
import locationsIcon from '@app/assets/icons/ic_locations_tab.svg';
import offersIcon from '@app/assets/icons/ic_offers.svg';

type BottomTabRouteMap = Record<ScreenValue, string>;

const bottomTabBarRoutesMap = {
  HOME_SCREEN: 'Inicio',
  ACCOUNT_SCREEN: 'Cuenta',
  PHARMACY_SCREEN: 'Farmacias',
  OFFERS: 'Ofertas',
};

export const toBottomBarRouteName = (
  screen: ScreenValue,
  routesMap: Partial<BottomTabRouteMap> = bottomTabBarRoutesMap,
) => routesMap[screen] ?? '';

export const toBottomBarSourceImage = (
  screen: ScreenValue,
  routesMap: Partial<BottomTabRouteMap> = bottomTabBarRoutesMap,
) => {
  var name = routesMap[screen] ?? '';
  var icon = homeIcon;
  switch (name) {
    case bottomTabBarRoutesMap.HOME_SCREEN:
      icon = homeIcon;
      break;
    case bottomTabBarRoutesMap.ACCOUNT_SCREEN:
      icon = profileIcon;
      break;
    case bottomTabBarRoutesMap.PHARMACY_SCREEN:
      icon = locationsIcon;
      break;
    case bottomTabBarRoutesMap.OFFERS:
      icon = offersIcon;
      break;
    default:
      icon = homeIcon;
  }
  return icon;
};
