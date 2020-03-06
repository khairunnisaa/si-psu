import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PertamananComponent } from './pertamanan.component';

describe('PertamananComponent', () => {
  let component: PertamananComponent;
  let fixture: ComponentFixture<PertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
