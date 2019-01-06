import {Component, OnInit} from '@angular/core';
import {BookChapterService} from "../shared/book-chapter.service";

@Component({
  selector: 'app-book-chapter-list',
  templateUrl: './book-chapter-list.component.html',
  styleUrls: ['./book-chapter-list.component.css']
})
export class BookChapterListComponent implements OnInit {

  bookChapters: Array<any>;

  constructor(private bookChapterService: BookChapterService) {
  }

  ngOnInit() {
    this.bookChapterService.getAll().subscribe(data => {
      this.bookChapters = data;
    });
  }

}
