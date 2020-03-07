import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuPertamananComponent } from './psu-pertamanan.component';

describe('PertamananComponent', () => {
  let component: PsuPertamananComponent;
  let fixture: ComponentFixture<PsuPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsuPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsuPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
