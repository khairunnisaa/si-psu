import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPerumahanComponent } from './camera-perumahan.component';

describe('DetailPerumahanComponent', () => {
  let component: CameraPerumahanComponent;
  let fixture: ComponentFixture<CameraPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPerumahanComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
