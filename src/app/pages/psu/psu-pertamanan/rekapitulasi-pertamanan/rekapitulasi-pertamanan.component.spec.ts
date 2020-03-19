import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapitulasiPertamananComponent } from './rekapitulasi-pertamanan.component';

describe('RekapitulasiPertamananComponent', () => {
  let component: RekapitulasiPertamananComponent;
  let fixture: ComponentFixture<RekapitulasiPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapitulasiPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapitulasiPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
