import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentListComponent } from './book-content-list.component';

describe('BookContentListComponent', () => {
  let component: BookContentListComponent;
  let fixture: ComponentFixture<BookContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
