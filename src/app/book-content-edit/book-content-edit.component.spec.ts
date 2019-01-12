import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentEditComponent } from './book-content-edit.component';

describe('BookContentEditComponent', () => {
  let component: BookContentEditComponent;
  let fixture: ComponentFixture<BookContentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
