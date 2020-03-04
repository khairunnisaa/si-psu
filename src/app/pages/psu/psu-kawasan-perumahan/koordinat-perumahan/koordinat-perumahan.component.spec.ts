import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoordinatPerumahanComponent } from './koordinat-perumahan.component';

describe('KoordinatPerumahanComponent', () => {
  let component: KoordinatPerumahanComponent;
  let fixture: ComponentFixture<KoordinatPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoordinatPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoordinatPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
