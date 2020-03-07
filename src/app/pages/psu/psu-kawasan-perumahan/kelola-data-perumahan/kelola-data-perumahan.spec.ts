import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelolaDataPerumahan } from './kelola-data-perumahan';

describe('EntryDataPerumahanComponent', () => {
  let component: KelolaDataPerumahan;
  let fixture: ComponentFixture<KelolaDataPerumahan>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelolaDataPerumahan ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelolaDataPerumahan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
