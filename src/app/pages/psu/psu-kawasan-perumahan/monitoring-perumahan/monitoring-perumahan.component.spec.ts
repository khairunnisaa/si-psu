import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPerumahanComponent } from './monitoring-perumahan.component';

describe('MonitoringPerumahanComponent', () => {
  let component: MonitoringPerumahanComponent;
  let fixture: ComponentFixture<MonitoringPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
