import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiPerumahanComponent } from './kondisi-perumahan.component';

describe('KondisiPerumahanComponent', () => {
  let component: KondisiPerumahanComponent;
  let fixture: ComponentFixture<KondisiPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
