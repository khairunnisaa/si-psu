import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkPerumahanComponent } from './router-link-perumahan.component';

describe('RouterLinkPerumahanComponent', () => {
  let component: RouterLinkPerumahanComponent;
  let fixture: ComponentFixture<RouterLinkPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinkPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
