import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobaTestComponent } from './coba-test.component';

describe('CobaTestComponent', () => {
  let component: CobaTestComponent;
  let fixture: ComponentFixture<CobaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
