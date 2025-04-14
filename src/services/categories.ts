import api from '@app/api/APIClient';
import Config from 'react-native-config';

const apiClient = api(Config.PRODUCT_SERVICE_URL!);

export const getCategories = async () =>
  apiClient
    .get('/categories/category-tree?showInMenu=true')
    .then(response => response)
    .catch(error => error);
