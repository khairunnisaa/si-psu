import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPermukimanComponent } from './detail-permukiman.component';

describe('DetailPermukimanComponent', () => {
  let component: DetailPermukimanComponent;
  let fixture: ComponentFixture<DetailPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
