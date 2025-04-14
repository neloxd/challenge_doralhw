import {CategoryItem} from '../Category';

export interface ParamsNavigationSubCategory {
  data: any;
  headerTitle: string;
}
export interface PDPProductSectionProps {
  iconImage?: any;
  text?: string;
  data?: CategoryItem;
  onPress?: (params: any) => void;
  isCategory?: boolean;
}
