import { IAddress } from './address.model';

export interface IOfficer {
  address: IAddress;
  name: string;
  appointed_on: string;
  officer_role: string;
  links: ILinks2;
  occupation?: string;
  nationality?: string;
  resigned_on?: string;
  date_of_birth?: IDateofbirth;
  country_of_residence?: string;
}

interface ILinks2 {
  officer: ILinkOfficer;
}

interface ILinkOfficer {
  appointments: string;
}

interface IDateofbirth {
  month: number;
  year: number;
}
