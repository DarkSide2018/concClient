import { Component, OnInit } from '@angular/core';
import {BookService} from "../shared/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book: any;
  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.getAll().subscribe(data => {
      this.book = data;
    });
  }

}
