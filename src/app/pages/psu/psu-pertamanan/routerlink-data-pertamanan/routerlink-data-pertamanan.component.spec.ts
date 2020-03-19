import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinkDataPertamananComponent } from './routerlink-data-pertamanan.component';

describe('RouterlinkDataPertamananComponent', () => {
  let component: RouterlinkDataPertamananComponent;
  let fixture: ComponentFixture<RouterlinkDataPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterlinkDataPertamananComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlinkDataPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
