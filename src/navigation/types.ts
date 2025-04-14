export enum Routes {
  HOME = 'HOME',
  HOME_SCREEN = 'HOME_SCREEN',
  ACCOUNT = 'ACCOUNT_SCREEN',
  PHARMACY = 'PHARMACY_SCREEN',
  CATEGORY = 'CATEGORY',
  SUBCATEGORY = 'SUBCATEGORY',
  LOGIN = 'LOGIN',
  PRODUCTS = 'PRODUCTS',
  OFFERS = 'OFFERS',
  PDP = 'PDP',
  REGISTER = 'REGISTER',
}

export type ScreenValue = (typeof Routes)[keyof typeof Routes];
