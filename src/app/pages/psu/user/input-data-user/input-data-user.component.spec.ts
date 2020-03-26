import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataUserComponent } from './input-data-user.component';

describe('InputDataUserComponent', () => {
  let component: InputDataUserComponent;
  let fixture: ComponentFixture<InputDataUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
