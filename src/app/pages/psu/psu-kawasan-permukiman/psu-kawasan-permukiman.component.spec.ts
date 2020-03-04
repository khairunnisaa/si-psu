import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman.component';

describe('PsuKawasanPermukimanComponent', () => {
  let component: PsuKawasanPermukimanComponent;
  let fixture: ComponentFixture<PsuKawasanPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsuKawasanPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsuKawasanPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
