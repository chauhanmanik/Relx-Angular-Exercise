export interface IApiResponse<T> {
  items: T[];
  page_number: number;
  kind: string;
  total_results: number;
}
