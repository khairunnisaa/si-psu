import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiBaikPermukimanComponent } from './kondisi-baik-permukiman.component';

describe('KondisiBaikPermukimanComponent', () => {
  let component: KondisiBaikPermukimanComponent;
  let fixture: ComponentFixture<KondisiBaikPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiBaikPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiBaikPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
