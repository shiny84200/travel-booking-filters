import { Routes } from '@angular/router';
import { Foodcomponent } from './components/foodcomponent/foodcomponent';
import { TravelFiltersComponent } from './components/travel-filters-component/travel-filters-component';


export const routes: Routes = [
  { path: '', component: TravelFiltersComponent },
  {path :'assesment2' ,component: Foodcomponent},
  { path: '**', redirectTo: '' }
];
