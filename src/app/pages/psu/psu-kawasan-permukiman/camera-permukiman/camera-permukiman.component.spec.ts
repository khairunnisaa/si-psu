import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPermukimanComponent } from './camera-permukiman.component';

describe('DetailPerumahanComponent', () => {
  let component: CameraPermukimanComponent;
  let fixture: ComponentFixture<CameraPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPermukimanComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
