export interface Props {
  productImage: string;
  productImageBackgroundColor: string;
  campaignName: string;
  campaignTag: string;
  campaignDiscount: number;
  campaignDescription: string;
  campaignExpirationDate: string;
  campaignTextColor: string;
  campaignColorButton: string;
  onPress?: () => void;
}