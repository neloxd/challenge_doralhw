import {FormattedProductData} from '@app/utils/formatUtils';

export interface Props {
  productImage: any;
  productBrand: string;
  productName: string;
  campaignTag: string;
  productCount: number;
  price: string;
  discountPrice: string;
  isVertical: boolean;
  productId: string;
  onPress?: any;
}

export interface ProductListProps {
  data: FormattedProductData[];
  verticalProducts: boolean;
}
