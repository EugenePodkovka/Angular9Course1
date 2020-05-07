import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMinimizedComponent } from './cart-minimized.component';

describe('CartMinimizedComponent', () => {
  let component: CartMinimizedComponent;
  let fixture: ComponentFixture<CartMinimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartMinimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMinimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
