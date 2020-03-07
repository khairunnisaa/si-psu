import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuBerandaComponent } from './psu-beranda.component';

describe('PsuBerandaComponent', () => {
  let component: PsuBerandaComponent;
  let fixture: ComponentFixture<PsuBerandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsuBerandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsuBerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
