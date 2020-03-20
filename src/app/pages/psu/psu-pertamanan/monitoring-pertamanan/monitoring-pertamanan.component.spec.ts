import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPertamananComponent } from './monitoring-pertamanan.component';

describe('MonitoringPertamananComponent', () => {
  let component: MonitoringPertamananComponent;
  let fixture: ComponentFixture<MonitoringPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
