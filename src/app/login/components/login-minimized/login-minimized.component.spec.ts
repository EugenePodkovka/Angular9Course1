import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMinimizedComponent } from './login-minimized.component';

describe('LoginMinimizedComponent', () => {
  let component: LoginMinimizedComponent;
  let fixture: ComponentFixture<LoginMinimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMinimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMinimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
