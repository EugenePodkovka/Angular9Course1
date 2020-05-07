import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOpenComponent } from './cart-open.component';

describe('CartOpenComponent', () => {
  let component: CartOpenComponent;
  let fixture: ComponentFixture<CartOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
