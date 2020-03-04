import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KondisiPertamananComponent } from './kondisi-pertamanan.component';

describe('KondisiPertamananComponent', () => {
  let component: KondisiPertamananComponent;
  let fixture: ComponentFixture<KondisiPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KondisiPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KondisiPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
