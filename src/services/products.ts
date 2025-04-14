import api from '@app/api/APIClient';
import {constants} from '@app/constants';
import {formatParams} from '@app/utils/formatUtils';

const apiClient = api(constants.endpoints.PRODUCT_SERVICE_URL);

const PRODUCTS_PATH = '/products';
const PRODUCT_SUMMARY_PATH = `${PRODUCTS_PATH}/product-summary`;
const PRODUCT_SEARCH_PATH = `${PRODUCTS_PATH}/search`;

export const getProducts = async (productsIds: string[]): Promise<any> => {
  const params = {
    ids: productsIds,
    fields: [
      'brand',
      'name',
      'prices',
      'promotions',
      'images',
      'prescriptionModel',
      'stock',
    ],
  };
  try {
    const response = await apiClient.get(
      `${PRODUCT_SUMMARY_PATH}?${formatParams(params)}`,
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const searchProducts = async (filters: any): Promise<any> => {
  const params = {
    limit: 10,
    offset: 0,
    sort: '',
    q: '',
    ...filters,
  };
  try {
    const response = await apiClient.get(
      `${PRODUCT_SEARCH_PATH}?${formatParams(params)}`,
    );
    return response;
  } catch (error) {
    return error;
  }
};
