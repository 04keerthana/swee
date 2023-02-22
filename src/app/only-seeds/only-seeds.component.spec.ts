import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlySeedsComponent } from './only-seeds.component';

describe('OnlySeedsComponent', () => {
  let component: OnlySeedsComponent;
  let fixture: ComponentFixture<OnlySeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlySeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlySeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
