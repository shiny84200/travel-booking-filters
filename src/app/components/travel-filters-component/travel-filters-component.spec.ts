import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFiltersComponent } from './travel-filters-component';

describe('TravelFiltersComponent', () => {
  let component: TravelFiltersComponent;
  let fixture: ComponentFixture<TravelFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
