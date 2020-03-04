import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiRusakPertamananComponent } from './kondisi-rusak-pertamanan.component';

describe('KondisiRusakPertamananComponent', () => {
  let component: KondisiRusakPertamananComponent;
  let fixture: ComponentFixture<KondisiRusakPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiRusakPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiRusakPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
