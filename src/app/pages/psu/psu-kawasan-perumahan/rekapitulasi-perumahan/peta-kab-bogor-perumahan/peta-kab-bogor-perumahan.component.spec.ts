import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaKabBogorPerumahanComponent } from './peta-kab-bogor-perumahan.component';

describe('PetaKabBogorPerumahanComponent', () => {
  let component: PetaKabBogorPerumahanComponent;
  let fixture: ComponentFixture<PetaKabBogorPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaKabBogorPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaKabBogorPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
