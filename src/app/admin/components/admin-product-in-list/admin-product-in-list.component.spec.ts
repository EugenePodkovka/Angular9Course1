import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductInListComponent } from './admin-product-in-list.component';

describe('AdminProductInListComponent', () => {
  let component: AdminProductInListComponent;
  let fixture: ComponentFixture<AdminProductInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
