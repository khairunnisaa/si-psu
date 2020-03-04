import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiRusakComponent } from './kondisi-rusak.component';

describe('KondisiRusakComponent', () => {
  let component: KondisiRusakComponent;
  let fixture: ComponentFixture<KondisiRusakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiRusakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiRusakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
