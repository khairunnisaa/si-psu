import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringPermukimanComponent } from './monitoring-permukiman.component';

describe('MonitoringPermukimanComponent', () => {
  let component: MonitoringPermukimanComponent;
  let fixture: ComponentFixture<MonitoringPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
