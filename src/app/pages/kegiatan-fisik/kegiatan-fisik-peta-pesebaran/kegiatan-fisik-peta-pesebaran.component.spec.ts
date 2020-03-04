import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanFisikPetaPesebaranComponent } from './kegiatan-fisik-peta-pesebaran.component';

describe('KegiatanFisikPetaPesebaranComponent', () => {
  let component: KegiatanFisikPetaPesebaranComponent;
  let fixture: ComponentFixture<KegiatanFisikPetaPesebaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanFisikPetaPesebaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanFisikPetaPesebaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
