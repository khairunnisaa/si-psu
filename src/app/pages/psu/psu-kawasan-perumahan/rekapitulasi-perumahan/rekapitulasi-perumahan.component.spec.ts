import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapitulasiPerumahanComponent } from './rekapitulasi-perumahan.component';

describe('RekapitulasiPerumahanComponent', () => {
  let component: RekapitulasiPerumahanComponent;
  let fixture: ComponentFixture<RekapitulasiPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapitulasiPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapitulasiPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
