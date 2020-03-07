import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaDataPermukimanComponent } from './kelola-data-permukiman.component';

describe('KelolaDataPermukimanComponent', () => {
  let component: KelolaDataPermukimanComponent;
  let fixture: ComponentFixture<KelolaDataPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelolaDataPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaDataPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
