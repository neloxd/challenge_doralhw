export interface ApiErrorResponse {
  type: string;
  method: string;
  detail: string;
  uri: string;
}