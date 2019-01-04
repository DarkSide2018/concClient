import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSectionListComponent } from './book-section-list.component';

describe('BookSectionListComponent', () => {
  let component: BookSectionListComponent;
  let fixture: ComponentFixture<BookSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
