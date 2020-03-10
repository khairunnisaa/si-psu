import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataPerumahanComponent } from './input-data-perumahan.component';

describe('InputDataPerumahanComponent', () => {
  let component: InputDataPerumahanComponent;
  let fixture: ComponentFixture<InputDataPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
