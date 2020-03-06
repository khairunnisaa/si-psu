import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDataPerumahanComponent } from './entry-data-perumahan.component';

describe('EntryDataPerumahanComponent', () => {
  let component: EntryDataPerumahanComponent;
  let fixture: ComponentFixture<EntryDataPerumahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDataPerumahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDataPerumahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
