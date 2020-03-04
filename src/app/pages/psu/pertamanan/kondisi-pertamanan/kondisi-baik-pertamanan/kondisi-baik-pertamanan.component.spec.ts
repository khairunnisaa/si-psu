import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiBaikPertamananComponent } from './kondisi-baik-pertamanan.component';

describe('KondisiBaikPertamananComponent', () => {
  let component: KondisiBaikPertamananComponent;
  let fixture: ComponentFixture<KondisiBaikPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiBaikPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiBaikPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
