import { Component } from '@angular/core';
import { Travelservice, Country, State, City } from '../../service/travelservice';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-travel-filters-component',
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule],
  templateUrl: './travel-filters-component.html',
  styleUrl: './travel-filters-component.scss'
})
export class TravelFiltersComponent {
  travelForm: FormGroup;
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];

  constructor(private fb: FormBuilder, private travelService: Travelservice) {
    this.travelForm = this.fb.group({
      country: [null],
      state: [{ value: null, disabled: true }],
      city: [{ value: null, disabled: true }]
    });
  }

  ngOnInit(): void {
    this.travelService.getCountries().subscribe((data:any) => this.countries = data);

    // Country change
    this.travelForm.get('country')!.valueChanges.pipe(
      tap((country:any) => {
        this.travelForm.get('state')!.reset();
        this.travelForm.get('city')!.reset();
        this.states = [];
        this.cities = [];

        if (country) {
          this.travelForm.get('state')!.enable();
        } else {
          this.travelForm.get('state')!.disable();
          this.travelForm.get('city')!.disable();
        }
      }),
      switchMap((country:any) => country ? this.travelService.getStates(country.id) : of([]))
    ).subscribe((states:any) => this.states = states);

    this.travelForm.get('state')!.valueChanges.pipe(
      tap((state:any) => {
        this.travelForm.get('city')!.reset();
        this.cities = [];

        if (state) {
          this.travelForm.get('city')!.enable();
        } else {
          this.travelForm.get('city')!.disable();
        }
      }),
      switchMap((state:any) => state ? this.travelService.getCities(state.id) : of([]))
    ).subscribe((cities:any) => this.cities = cities);
  }
}
