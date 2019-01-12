import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChapterEditComponent } from './book-chapter-edit.component';

describe('BookChapterEditComponent', () => {
  let component: BookChapterEditComponent;
  let fixture: ComponentFixture<BookChapterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookChapterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChapterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
