import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCameraPertamananComponent } from './ip-camera-pertamanan.component';

describe('IpCameraPertamananComponent', () => {
  let component: IpCameraPertamananComponent;
  let fixture: ComponentFixture<IpCameraPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpCameraPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpCameraPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
