import {Component, OnInit} from '@angular/core';
import {BookSectionService} from "../shared/book-section.service";

@Component({
  selector: 'app-book-section-list',
  templateUrl: './book-section-list.component.html',
  styleUrls: ['./book-section-list.component.css']
})
export class BookSectionListComponent implements OnInit {

  private bookSections: Array<any>;
  private bootstrapCol: number = 2;
  private bookContents: Array<any> = new Array<any>();
  private displayContent: Array<boolean> = new Array<boolean>();
  // without declaration of array not working
  private displayDesc: Array<boolean> = new Array<boolean>();

  constructor(private bookSectionService: BookSectionService) {
  }

  showSectionDesc(id) {
    this.displayDesc[id] = !this.displayDesc[id];
  }

  checkSectionCondition(id): boolean {

    return this.displayDesc[id]
  }

  checkContentCondition(id): boolean {

    return this.displayContent[id]
  }

  showContent(id) {
    this.displayContent[id] = !this.displayContent[id];
  }

  showContentTitle(id) {
    this.bookSectionService.getContentByID(id).subscribe(data => {
      this.bookContents = data;
    });

    this.displayContent = new Array<boolean>(this.bookContents.length);
    let i: number;
    for (i = 0; i < this.displayContent.length; i++) {
      this.displayContent[i] = false;
    }
  }

  ngOnInit() {
    this.bookSectionService.getAll().subscribe(data => {
      this.bookSections = data;
    });
    this.displayDesc = new Array<boolean>(this.bookSections.length);
    let i: number;
    for (i = 0; i < this.displayDesc.length; i++) {
      this.displayDesc[i] = false;
    }
  }
}
