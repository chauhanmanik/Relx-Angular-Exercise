import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IApiResponse } from '../models/api-response.model';
import { ICompanyDetail } from '../models/company-detail.model';
import { IOfficer } from '../models/officer.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);

  public getSearchResults(
    searchTerm: string
  ): Observable<IApiResponse<ICompanyDetail>> {
    const url = '/v1/Search';

    return this.http
      .get<IApiResponse<ICompanyDetail>>(`${url}?Query=${searchTerm}`)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  public getOfficers(
    companyNumber: string
  ): Observable<IApiResponse<IOfficer>> {
    const url = '/v1/Officers';

    return this.http
      .get<IApiResponse<IOfficer>>(`${url}?CompanyNumber=${companyNumber}`)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }
}
