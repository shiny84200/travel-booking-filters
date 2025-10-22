import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Filter {
  name: string;
  mutuallyExclusiveWith: string[];
}
export interface FoodItem {
  id: number;
  name: string;
  type: string;
  meal: string;
  diet: string[];
}
@Injectable({
  providedIn: 'root'
})
export class Foodservice {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getFilters(): Observable<Filter[]> {
    return this.http.get<Filter[]>(`${this.apiUrl}/filters`);
  }

  getFoodItems(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(`${this.apiUrl}/foodItems`);
  }
}
