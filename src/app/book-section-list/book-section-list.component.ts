import {Component, OnInit} from '@angular/core';
import {BookSectionService} from "../shared/book-section.service";

@Component({
  selector: 'app-book-section-list',
  templateUrl: './book-section-list.component.html',
  styleUrls: ['./book-section-list.component.css']
})
export class BookSectionListComponent implements OnInit {

  bookSections: Array<any>;
  displayDesc = false;
  constructor(private bookSectionService: BookSectionService) {
  }
  showDesc(event){
    this.displayDesc = !this.displayDesc;
  }
  ngOnInit() {
    this.bookSectionService.getAll().subscribe(data => {
      this.bookSections = data;
    });
  }

}
