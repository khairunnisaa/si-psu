import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeteranganPertamananComponent } from './keterangan-pertamanan.component';

describe('KeteranganPertamananComponent', () => {
  let component: KeteranganPertamananComponent;
  let fixture: ComponentFixture<KeteranganPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeteranganPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeteranganPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
