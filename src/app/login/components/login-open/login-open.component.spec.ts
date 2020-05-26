import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOpenComponent } from './login-open.component';

describe('LoginOpenComponent', () => {
  let component: LoginOpenComponent;
  let fixture: ComponentFixture<LoginOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
