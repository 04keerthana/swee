import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyPlantsComponent } from './only-plants.component';

describe('OnlyPlantsComponent', () => {
  let component: OnlyPlantsComponent;
  let fixture: ComponentFixture<OnlyPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyPlantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
