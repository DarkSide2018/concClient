import { TestBed } from '@angular/core/testing';

import { BookContentService } from './book-content.service';

describe('BookContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookContentService = TestBed.get(BookContentService);
    expect(service).toBeTruthy();
  });
});
