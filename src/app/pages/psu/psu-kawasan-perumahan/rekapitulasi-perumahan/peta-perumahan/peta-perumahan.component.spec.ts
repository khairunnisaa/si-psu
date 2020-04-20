import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaPerumahanComponent } from './peta-perumahan.component';

describe('PetaPerumahanComponent', () => {
  let component: PetaPerumahanComponent;
  let fixture: ComponentFixture<PetaPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
