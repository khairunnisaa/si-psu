import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaDataPerumahanComponent } from './kelola-data-perumahan.component';

describe('EntryDataPerumahanComponent', () => {
  let component: KelolaDataPerumahanComponent;
  let fixture: ComponentFixture<KelolaDataPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelolaDataPerumahanComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaDataPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
