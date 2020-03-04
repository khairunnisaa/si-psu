import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPermukimanComponent } from './status-permukiman.component';

describe('StatusPermukimanComponent', () => {
  let component: StatusPermukimanComponent;
  let fixture: ComponentFixture<StatusPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
