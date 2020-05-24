import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentCardComponent } from './main-content-card.component';

describe('MainContentCardComponent', () => {
  let component: MainContentCardComponent;
  let fixture: ComponentFixture<MainContentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
