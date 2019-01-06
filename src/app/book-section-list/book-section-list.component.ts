import {Component, OnInit} from '@angular/core';
import {BookSectionService} from "../shared/book-section.service";

@Component({
  selector: 'app-book-section-list',
  templateUrl: './book-section-list.component.html',
  styleUrls: ['./book-section-list.component.css']
})
export class BookSectionListComponent implements OnInit {

  bookSections: Array<any>;
  bookContents: Array<any>;
  displayDesc = false;
  constructor(private bookSectionService: BookSectionService) {
  }
  showDesc(){
    this.displayDesc = !this.displayDesc;
  }
  showContent(id){
    console.log(id);
    this.bookSectionService.getContentByID(id).subscribe(data => {
      this.bookContents = data;
    });
  }
  ngOnInit() {
    this.bookSectionService.getAll().subscribe(data => {
      this.bookSections = data;
    });
    // this.bookSectionService.getAllContent().subscribe(data => {
    //   this.bookContents = data;
    // });
  }

}
