import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDataPerumahanComponent } from './popup-data-perumahan.component';

describe('PopupDataPerumahanComponent', () => {
  let component: PopupDataPerumahanComponent;
  let fixture: ComponentFixture<PopupDataPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDataPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDataPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
