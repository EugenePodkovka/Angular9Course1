import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductInListComponent } from './cart-product-in-list.component';

describe('CartProductInListComponent', () => {
  let component: CartProductInListComponent;
  let fixture: ComponentFixture<CartProductInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProductInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
