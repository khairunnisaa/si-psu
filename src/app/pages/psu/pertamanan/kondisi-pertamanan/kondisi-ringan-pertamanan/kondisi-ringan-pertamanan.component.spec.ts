import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiRinganPertamananComponent } from './kondisi-ringan-pertamanan.component';

describe('KondisiRinganPertamananComponent', () => {
  let component: KondisiRinganPertamananComponent;
  let fixture: ComponentFixture<KondisiRinganPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiRinganPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiRinganPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
