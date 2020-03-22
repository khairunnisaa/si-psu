import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPertamananComponent } from './camera-pertamanan.component';

describe('DetailPerumahanComponent', () => {
  let component: CameraPertamananComponent;
  let fixture: ComponentFixture<CameraPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPertamananComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
