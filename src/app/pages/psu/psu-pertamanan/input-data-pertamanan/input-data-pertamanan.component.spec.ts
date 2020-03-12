import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataPertamananComponent } from './input-data-pertamanan.component';

describe('InputDataPertamananComponent', () => {
  let component: InputDataPertamananComponent;
  let fixture: ComponentFixture<InputDataPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
