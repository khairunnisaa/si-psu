import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiRinganComponent } from './kondisi-ringan.component';

describe('KondisiRinganComponent', () => {
  let component: KondisiRinganComponent;
  let fixture: ComponentFixture<KondisiRinganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiRinganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiRinganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
