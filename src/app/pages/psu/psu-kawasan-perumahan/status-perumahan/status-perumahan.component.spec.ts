import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPerumahanComponent } from './status-perumahan.component';

describe('StatusPerumahanComponent', () => {
  let component: StatusPerumahanComponent;
  let fixture: ComponentFixture<StatusPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
