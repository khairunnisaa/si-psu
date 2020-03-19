import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapitulasiPermukimanComponent } from './rekapitulasi-permukiman.component';

describe('RekapitulasiPermukimanComponent', () => {
  let component: RekapitulasiPermukimanComponent;
  let fixture: ComponentFixture<RekapitulasiPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapitulasiPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapitulasiPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
