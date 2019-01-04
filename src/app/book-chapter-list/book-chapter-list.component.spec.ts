import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChapterListComponent } from './book-chapter-list.component';

describe('BookChapterListComponent', () => {
  let component: BookChapterListComponent;
  let fixture: ComponentFixture<BookChapterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookChapterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChapterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
