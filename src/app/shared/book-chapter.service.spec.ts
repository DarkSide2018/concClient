import { TestBed } from '@angular/core/testing';

import { BookChapterService } from './book-chapter.service';

describe('BookChapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookChapterService = TestBed.get(BookChapterService);
    expect(service).toBeTruthy();
  });
});
