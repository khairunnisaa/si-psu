import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiBaikComponent } from './kondisi-baik.component';

describe('KondisiBaikComponent', () => {
  let component: KondisiBaikComponent;
  let fixture: ComponentFixture<KondisiBaikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiBaikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiBaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
