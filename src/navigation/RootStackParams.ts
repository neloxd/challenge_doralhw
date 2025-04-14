import {CategoryItem} from '@app/types/components/Category';
import {Routes} from '@app/navigation/types';

export type RootStackParams = {
  [Routes.HOME]: undefined;
  [Routes.HOME_SCREEN]: undefined;
  [Routes.ACCOUNT]: undefined;
  [Routes.PHARMACY]: {id: any};
  [Routes.CATEGORY]: undefined;
  [Routes.SUBCATEGORY]: {
    categories: CategoryItem[];
    headerTitle: string;
  };
  [Routes.LOGIN]: undefined;
  [Routes.PRODUCTS]: {
    cgid: string;
    headerTitle: string;
  };
  [Routes.OFFERS]: undefined;
  [Routes.PDP]: {
    id: string;
  };
  [Routes.REGISTER]: undefined;
};
