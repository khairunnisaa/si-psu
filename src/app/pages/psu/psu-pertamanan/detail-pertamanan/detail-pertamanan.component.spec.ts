import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPertamananComponent } from './detail-pertamanan.component';

describe('DetailPertamananComponent', () => {
  let component: DetailPertamananComponent;
  let fixture: ComponentFixture<DetailPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
