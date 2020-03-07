import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPerumahanComponent } from './detail-perumahan.component';

describe('DetailPerumahanComponent', () => {
  let component: DetailPerumahanComponent;
  let fixture: ComponentFixture<DetailPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPerumahanComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
