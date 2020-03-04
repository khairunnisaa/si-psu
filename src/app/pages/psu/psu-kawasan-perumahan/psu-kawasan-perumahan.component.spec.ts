import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';

describe('PsuKawasanPerumahanComponent', () => {
  let component: PsuKawasanPerumahanComponent;
  let fixture: ComponentFixture<PsuKawasanPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsuKawasanPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsuKawasanPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
