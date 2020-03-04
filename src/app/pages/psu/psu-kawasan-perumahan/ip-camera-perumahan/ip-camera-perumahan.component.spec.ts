import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCameraPerumahanComponent } from './ip-camera-perumahan.component';

describe('IpCameraPerumahanComponent', () => {
  let component: IpCameraPerumahanComponent;
  let fixture: ComponentFixture<IpCameraPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpCameraPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpCameraPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
