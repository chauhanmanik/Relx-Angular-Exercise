import { ICompanyDetail } from './company-detail.model';

export interface IApiResponse {
  items: ICompanyDetail[];
  page_number: number;
  kind: string;
  total_results: number;
}
