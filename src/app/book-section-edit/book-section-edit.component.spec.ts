import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSectionEditComponent } from './book-section-edit.component';

describe('BookSectionEditComponent', () => {
  let component: BookSectionEditComponent;
  let fixture: ComponentFixture<BookSectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
