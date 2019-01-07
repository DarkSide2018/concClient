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
  // without declaration of array not working
  private displayDesc:  Array<boolean> = new Array<boolean>();

  constructor(private bookSectionService: BookSectionService) {
  }
  showDesc(id){
   this.displayDesc[id] = !this.displayDesc[id];
  }
  checkCondition(id) : boolean{

    return this.displayDesc[id]
  }
  showContent(id){
    this.bookSectionService.getContentByID(id).subscribe(data => {
      this.bookContents = data;
    });
  }
  ngOnInit() {
    this.bookSectionService.getAll().subscribe(data => {
      this.bookSections = data;
    });
    this.displayDesc = new Array<boolean>(this.bookSections.length);
    let i:number;
    for(i=0;i<this.displayDesc.length;i++) {
      this.displayDesc[i] = false;
    }
  }
}
