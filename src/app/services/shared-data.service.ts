import { Injectable, signal } from '@angular/core';
import { ICompanyDetail } from '../models/company-detail.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private companyDetails = signal<ICompanyDetail>({} as ICompanyDetail);

  public updateCompanyDetails(companyDetails: ICompanyDetail) {
    this.companyDetails.set(companyDetails);
  }

  public getCompanyDetails() {
    return this.companyDetails();
  }
}
