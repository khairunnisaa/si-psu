import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataPermukimanComponent } from './input-data-permukiman.component';

describe('InputDataPermukimanComponent', () => {
  let component: InputDataPermukimanComponent;
  let fixture: ComponentFixture<InputDataPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataPermukimanComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
