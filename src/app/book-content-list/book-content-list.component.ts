import {Component, OnInit} from '@angular/core';
import {BookContentService} from "../shared/book-content.service";

@Component({
  selector: 'app-book-content-list',
  templateUrl: './book-content-list.component.html',
  styleUrls: ['./book-content-list.component.css']
})
export class BookContentListComponent implements OnInit {

  bookContents: Array<any>;
  constructor(private bookContentService: BookContentService) {
  }

  ngOnInit() {

  }
}
