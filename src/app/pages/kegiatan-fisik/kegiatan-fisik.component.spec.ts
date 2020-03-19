import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanFiskComponent } from './kegiatan-fisik.component';

describe('KegiatanFiskComponent', () => {
  let component: KegiatanFiskComponent;
  let fixture: ComponentFixture<KegiatanFiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanFiskComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanFiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
