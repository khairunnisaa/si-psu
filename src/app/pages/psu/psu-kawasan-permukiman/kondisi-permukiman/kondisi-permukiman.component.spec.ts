import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiPermukimanComponent } from './kondisi-permukiman.component';

describe('KondisiPermukimanComponent', () => {
  let component: KondisiPermukimanComponent;
  let fixture: ComponentFixture<KondisiPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
