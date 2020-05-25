import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderInListComponent } from './admin-order-in-list.component';

describe('AdminOrderInListComponent', () => {
  let component: AdminOrderInListComponent;
  let fixture: ComponentFixture<AdminOrderInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
