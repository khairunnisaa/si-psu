import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPerumahanComponent } from './popup-perumahan.component';

describe('PopupPerumahanComponent', () => {
  let component: PopupPerumahanComponent;
  let fixture: ComponentFixture<PopupPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
