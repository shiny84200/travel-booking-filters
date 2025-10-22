import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country { id: number; name: string; }
export interface State { id: number; countryId: number; name: string; }
export interface City { id: number; stateId: number; name: string; }
@Injectable({
  providedIn: 'root'
})
export class Travelservice {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/countries`);
  }

  getStates(countryId: number): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/states?countryId=${countryId}`);
  }

  getCities(stateId: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/cities?stateId=${stateId}`);
  }
}
