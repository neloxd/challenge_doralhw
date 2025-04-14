import {constants} from '@app/constants';
import axios from 'axios';

const apiClient = (dynamicBaseURL: string) => {
  const axiosInstance = axios.create({
    baseURL: dynamicBaseURL,
    headers: {
      Accept: constants.headersClient[0].accept,
    },
  });

  return axiosInstance;
};

export default apiClient;

apiClient('your_base_url').interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

apiClient('your_base_url').interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    console.log(
      `%c ${error.response.status} - :`,
      'color: #a71d5d; font-weight: bold',
      error.response,
    );
    return Promise.reject(error);
  },
);
