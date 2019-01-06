import {Component, OnInit} from '@angular/core';
import {BookSectionService} from "../shared/book-section.service";

@Component({
  selector: 'app-book-section-list',
  templateUrl: './book-section-list.component.html',
  styleUrls: ['./book-section-list.component.css']
})
export class BookSectionListComponent implements OnInit {

  private bookSections: Array<any>;
  private bookContents: Array<any>;
  private displayDesc:boolean = false;
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
  }

}
