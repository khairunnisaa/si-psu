import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDataPertamananComponent } from './entry-data-pertamanan.component';

describe('EntryDataPertamananComponent', () => {
  let component: EntryDataPertamananComponent;
  let fixture: ComponentFixture<EntryDataPertamananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDataPertamananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDataPertamananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
