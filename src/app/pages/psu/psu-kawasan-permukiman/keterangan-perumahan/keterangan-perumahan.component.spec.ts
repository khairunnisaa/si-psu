import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeteranganPerumahanComponent } from './keterangan-perumahan.component';

describe('KeteranganPerumahanComponent', () => {
  let component: KeteranganPerumahanComponent;
  let fixture: ComponentFixture<KeteranganPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeteranganPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeteranganPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
