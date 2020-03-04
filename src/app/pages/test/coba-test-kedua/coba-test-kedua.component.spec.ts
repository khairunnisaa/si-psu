import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobaTestKeduaComponent } from './coba-test-kedua.component';

describe('CobaTestKeduaComponent', () => {
  let component: CobaTestKeduaComponent;
  let fixture: ComponentFixture<CobaTestKeduaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobaTestKeduaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobaTestKeduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
