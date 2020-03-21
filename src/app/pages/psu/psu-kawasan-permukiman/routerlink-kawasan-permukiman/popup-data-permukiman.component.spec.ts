import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDataPermukimanComponent } from './popup-data-permukiman.component';

describe('PopupDataPermukimanComponent', () => {
  let component: PopupDataPermukimanComponent;
  let fixture: ComponentFixture<PopupDataPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDataPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDataPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
