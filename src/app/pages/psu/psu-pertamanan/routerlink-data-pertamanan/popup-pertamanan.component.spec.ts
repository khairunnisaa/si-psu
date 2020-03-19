import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPertamananComponent } from './popup-pertamanan.component';

describe('PopupPertamananComponent', () => {
  let component: PopupPertamananComponent;
  let fixture: ComponentFixture<PopupPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
