import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDataPermukimanComponent } from './entry-data-permukiman.component';

describe('EntryDataPermukimanComponent', () => {
  let component: EntryDataPermukimanComponent;
  let fixture: ComponentFixture<EntryDataPermukimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryDataPermukimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryDataPermukimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
