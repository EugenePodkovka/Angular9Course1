import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInListComponentComponent } from './product-in-list-component.component';

describe('ProductComponentComponent', () => {
  let component: ProductInListComponentComponent;
  let fixture: ComponentFixture<ProductInListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
