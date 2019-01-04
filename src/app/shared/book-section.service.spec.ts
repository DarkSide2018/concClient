import { TestBed } from '@angular/core/testing';

import { BookSectionService } from './book-section.service';

describe('BookSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookSectionService = TestBed.get(BookSectionService);
    expect(service).toBeTruthy();
  });
});
