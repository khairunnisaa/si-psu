import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaSebaranPerumahanComponent } from './peta-sebaran-perumahan.component';

describe('PetaSebaranPerumahanComponent', () => {
  let component: PetaSebaranPerumahanComponent;
  let fixture: ComponentFixture<PetaSebaranPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaSebaranPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaSebaranPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
