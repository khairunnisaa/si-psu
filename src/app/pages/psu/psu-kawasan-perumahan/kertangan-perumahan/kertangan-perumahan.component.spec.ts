import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KertanganPerumahanComponent } from './kertangan-perumahan.component';

describe('KertanganPerumahanComponent', () => {
  let component: KertanganPerumahanComponent;
  let fixture: ComponentFixture<KertanganPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KertanganPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KertanganPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
