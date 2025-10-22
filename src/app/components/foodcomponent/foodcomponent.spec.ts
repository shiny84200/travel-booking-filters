import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foodcomponent } from './foodcomponent';

describe('Foodcomponent', () => {
  let component: Foodcomponent;
  let fixture: ComponentFixture<Foodcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foodcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foodcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
