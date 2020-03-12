import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinkKawasanPermukimanComponent } from './routerlink-kawasan-permukiman.component';

describe('RouterlinkKawasanPermukimanComponent', () => {
  let component: RouterlinkKawasanPermukimanComponent;
  let fixture: ComponentFixture<RouterlinkKawasanPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterlinkKawasanPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlinkKawasanPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
