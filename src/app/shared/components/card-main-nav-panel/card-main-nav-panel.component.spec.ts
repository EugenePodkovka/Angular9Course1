import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainNavPanelComponent } from './card-main-nav-panel.component';

describe('CardMainNavPanelComponent', () => {
  let component: CardMainNavPanelComponent;
  let fixture: ComponentFixture<CardMainNavPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMainNavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMainNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
