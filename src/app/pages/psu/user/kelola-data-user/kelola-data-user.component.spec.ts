import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaDataUserComponent } from './kelola-data-user.component';

describe('KelolaDataUserComponent', () => {
  let component: KelolaDataUserComponent;
  let fixture: ComponentFixture<KelolaDataUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelolaDataUserComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
