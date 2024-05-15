import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IApiResponse } from '../models/api-response.model';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);
  private url = '/v1/Search';

  private headers = new HttpHeaders({
    'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET',
  });

  public getSearchResults(searchTerm: string): Observable<IApiResponse> {
    return this.http
      .get<IApiResponse>(`${this.url}?Query=${searchTerm}`, {
        headers: this.headers,
      })
      .pipe(
        catchError((error) => {
          // console.error('Error occurred on company search:', error);
          throw error;
        })
      );
  }
}
