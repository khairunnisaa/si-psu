import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaSebaranComponent } from './peta-sebaran.component';

describe('PetaSebaranComponent', () => {
  let component: PetaSebaranComponent;
  let fixture: ComponentFixture<PetaSebaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaSebaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaSebaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
