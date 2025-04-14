import {StackNavigationOptions} from '@react-navigation/stack';
import {Routes} from '@app/navigation/types';
import CustomHeader from '@app/components/CustomHeader';

const defaultNavOptions = () => ({
  headerShown: false,
  header: (props: any) => <CustomHeader {...props} />,
});

const showHeader = (headerShown: boolean) => ({headerShown});

export const appStackNavConfig = {
  screenOptions: defaultNavOptions,
};

export const authStackNavConfig = {
  screenOptions: defaultNavOptions,
  initialRouteName: Routes.LOGIN,
};

export const appScreensNavOptions: Partial<
  Record<Routes, StackNavigationOptions>
> = {
  [Routes.LOGIN]: showHeader(false),
  [Routes.HOME_SCREEN]: showHeader(false),
  [Routes.CATEGORY]: {
    headerTitle: 'Categorías',
    headerShown: true,
    headerBackTitle: Routes.CATEGORY,
  },
  [Routes.SUBCATEGORY]: showHeader(true),
  [Routes.PRODUCTS]: showHeader(true),
  [Routes.PDP]: showHeader(false),
  [Routes.REGISTER]: showHeader(true),
};
