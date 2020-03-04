import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoordinatPertamananComponent } from './koordinat-pertamanan.component';

describe('KoordinatPertamananComponent', () => {
  let component: KoordinatPertamananComponent;
  let fixture: ComponentFixture<KoordinatPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoordinatPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoordinatPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
