import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaDataPertamananComponent } from './kelola-data-pertamanan.component';

describe('KelolaDataPertamananComponent', () => {
  let component: KelolaDataPertamananComponent;
  let fixture: ComponentFixture<KelolaDataPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelolaDataPertamananComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaDataPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
