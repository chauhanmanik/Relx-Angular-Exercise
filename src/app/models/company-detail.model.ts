import { IAddress } from './address.model';
import { ILinks } from './links.model';
import { IMatches } from './match.model';

export interface ICompanyDetail {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches: IMatches;
  description: string;
  links: ILinks;
  company_number: string;
  title: string;
  company_type: string;
  address: IAddress;
}
