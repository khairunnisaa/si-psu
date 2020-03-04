import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiRinganPermukimanComponent } from './kondisi-ringan-permukiman.component';

describe('KondisiRinganPermukimanComponent', () => {
  let component: KondisiRinganPermukimanComponent;
  let fixture: ComponentFixture<KondisiRinganPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiRinganPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiRinganPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
