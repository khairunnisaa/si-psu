import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBerandaComponent } from './detail-beranda.component';

describe('DetailBerandaComponent', () => {
  let component: DetailBerandaComponent;
  let fixture: ComponentFixture<DetailBerandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBerandaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
