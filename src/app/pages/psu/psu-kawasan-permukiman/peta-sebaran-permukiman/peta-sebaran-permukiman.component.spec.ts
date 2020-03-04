import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaSebaranPermukimanComponent } from './peta-sebaran-permukiman.component';

describe('PetaSebaranPermukimanComponent', () => {
  let component: PetaSebaranPermukimanComponent;
  let fixture: ComponentFixture<PetaSebaranPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaSebaranPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaSebaranPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
