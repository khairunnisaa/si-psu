import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiRusakPermukimanComponent } from './kondisi-rusak-permukiman.component';

describe('KondisiRusakPermukimanComponent', () => {
  let component: KondisiRusakPermukimanComponent;
  let fixture: ComponentFixture<KondisiRusakPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiRusakPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiRusakPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
