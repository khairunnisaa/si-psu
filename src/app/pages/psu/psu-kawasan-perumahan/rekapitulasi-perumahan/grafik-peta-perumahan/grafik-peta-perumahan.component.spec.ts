import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafikPetaPerumahanComponent } from './grafik-peta-perumahan.component';

describe('GrafikPetaPerumahanComponent', () => {
  let component: GrafikPetaPerumahanComponent;
  let fixture: ComponentFixture<GrafikPetaPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafikPetaPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafikPetaPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
