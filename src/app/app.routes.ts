import { Routes } from '@angular/router';
import { TravelFiltersComponent } from './components/travel-filters-component/travel-filters-component';


export const routes: Routes = [
  { path: '', component: TravelFiltersComponent },
  { path: '**', redirectTo: '' }
];
