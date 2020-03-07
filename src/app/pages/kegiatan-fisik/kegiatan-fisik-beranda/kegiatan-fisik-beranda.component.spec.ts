import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanFisikBerandaComponent } from './kegiatan-fisik-beranda.component';

describe('KegiatanFisikBerandaComponent', () => {
  let component: KegiatanFisikBerandaComponent;
  let fixture: ComponentFixture<KegiatanFisikBerandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanFisikBerandaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanFisikBerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
