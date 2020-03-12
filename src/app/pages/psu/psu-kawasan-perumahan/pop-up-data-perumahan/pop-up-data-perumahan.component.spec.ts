import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDataPerumahanComponent } from './pop-up-data-perumahan.component';

describe('PopUpDataPerumahanComponent', () => {
  let component: PopUpDataPerumahanComponent;
  let fixture: ComponentFixture<PopUpDataPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDataPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDataPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
