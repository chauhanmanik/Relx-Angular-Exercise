import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiResponse } from '../models/api-response.model';
import { Observable, catchError } from 'rxjs';
import { ICompanyDetail } from '../models/company-detail.model';
import { IOfficer } from '../models/officer.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);

  private headers = new HttpHeaders({
    'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET',
  });

  public getSearchResults(
    searchTerm: string
  ): Observable<IApiResponse<ICompanyDetail>> {
    const url = '/v1/Search';

    return this.http
      .get<IApiResponse<ICompanyDetail>>(`${url}?Query=${searchTerm}`, {
        headers: this.headers,
      })
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
      .get<IApiResponse<IOfficer>>(`${url}?CompanyNumber=${companyNumber}`, {
        headers: this.headers,
      })
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }
}
