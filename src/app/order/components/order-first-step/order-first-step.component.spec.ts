import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFirstStepComponent } from './order-first-step.component';

describe('OrderFirstStepComponent', () => {
  let component: OrderFirstStepComponent;
  let fixture: ComponentFixture<OrderFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
