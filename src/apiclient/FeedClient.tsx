import api from '@app/api/APIClient';
import type { ApiResponse } from '@app/types/components/ApiResponse';
import type { ApiErrorResponse } from '@app/types/components/ApiResponseError';
import type { AxiosError } from 'axios';
import Config from 'react-native-config';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const feedClient = api(Config.SERVER!);

/**
 * Call feeds 
 * @async
 * @returns {Promise<ApiResponse | ApiErrorResponse>}
 *
 */

export const invokeApiData = async (date: string, language: string): Promise<ApiResponse | ApiErrorResponse> => {
  const path = `${// biome-ignore lint/style/noNonNullAssertion: <explanation>
Config.FEED_PATH! + language}/featured/${date}`;//`https://api.wikimedia.org/feed/v1/wikipedia/${language}/featured/${date}`;

console.log('path', path);
  try {
    const response = await feedClient.get<ApiResponse>(path);
    return response.data;
  } catch (error) {
    if(error as AxiosError<ApiErrorResponse>) {
      const err = error as AxiosError<ApiErrorResponse>;
      const errResponse: ApiErrorResponse = {
        type: err.response?.data.type || 'unknown_error',
        detail: err.response?.data.detail || 'An error occurred',
        method: err.request?.method || 'GET',
        uri: err.config?.url || path,
      };
      return errResponse;
    }
    const errResponse: ApiErrorResponse = { 
        type: 'unknown_error',
        detail: 'An error occurred',
        method: 'GET',
        uri: path,
      };
      return errResponse;
    }
};