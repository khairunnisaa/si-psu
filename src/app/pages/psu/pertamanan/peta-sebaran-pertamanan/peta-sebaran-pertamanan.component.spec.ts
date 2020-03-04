import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaSebaranPertamananComponent } from './peta-sebaran-pertamanan.component';

describe('PetaSebaranPertamananComponent', () => {
  let component: PetaSebaranPertamananComponent;
  let fixture: ComponentFixture<PetaSebaranPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaSebaranPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaSebaranPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
