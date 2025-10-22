import { Component } from '@angular/core';
import {Filter, FoodItem, Foodservice } from '../../service/foodservice';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-foodcomponent',
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule],
  templateUrl: './foodcomponent.html',
  styleUrl: './foodcomponent.scss'
})
export class Foodcomponent {
  filters: Filter[] = [];
  foodItems: FoodItem[] = [];
  filteredFood: FoodItem[] = [];
  filterForm: FormGroup;

  constructor(private fb: FormBuilder, private foodService: Foodservice) {
    this.filterForm = this.fb.group({});
  }
  ngOnInit(): void {
    this.foodService.getFilters().subscribe(filters => {
      this.filters = filters;
      this.filters.forEach(f => this.filterForm.addControl(f.name, new FormControl(false)));
      this.filterForm.valueChanges.subscribe(() => this.updateFilteredFood());
    });
    this.foodService.getFoodItems().subscribe(items => {
      this.foodItems = items;
      this.filteredFood = [...items];
    });
  }

  updateFilteredFood() {
    let selected = Object.keys(this.filterForm.value).filter(f => this.filterForm.value[f]);
console.log(this.filterForm.value)
    this.filters.forEach(f => {
      let shouldDisable = selected.some(s => this.filters.find(x => x.name === s)?.mutuallyExclusiveWith.includes(f.name));
      let control = this.filterForm.get(f.name);
      if (control) control[shouldDisable ? 'disable' : 'enable']({ emitEvent: false });
    });

    this.filteredFood = this.foodItems.filter(item => {
      return selected.every(f => {
        return item.type === f || item.meal === f || item.diet.includes(f);
      });
    });
  }
}
