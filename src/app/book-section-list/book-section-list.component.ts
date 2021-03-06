import {Component, OnInit} from '@angular/core';
import {BookSectionService} from "../shared/book-section.service";
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-section-list',
  templateUrl: './book-section-list.component.html',
  styleUrls: ['./book-section-list.component.css']
})
export class BookSectionListComponent implements OnInit {

  private bookSections: Array<any>;
  private currentBookSection: number;
  // constants definition
  private readonly firstPosition: number = 2;
  private readonly lastPosition: number = 10;
  private readonly maxPosition: number = 13;
  private readonly minPosition: number = 0;
  private showSectionComponent: boolean = true;
  private bootstrapColFirst: number = this.firstPosition;
  private bootstrapColLast: number = this.lastPosition;
  private bookContents: Array<any> = new Array<any>();
  private displayContent: Array<boolean> = new Array<boolean>();
  // without declaration of array not working
  private displayDesc: Array<boolean> = new Array<boolean>();

  constructor(private bookSectionService: BookSectionService,
              private router: Router,
              private appComponent: AppComponent) {

  }

  hideData() {

    this.appComponent.showData = false;
  }

  incSize() {
    this.bootstrapColFirst = this.maxPosition;
    this.bootstrapColLast = this.minPosition;
  }

  incSizeContent() {
    this.bootstrapColFirst = this.minPosition;
    this.bootstrapColLast = this.maxPosition;
  }

  showSectionDesc(id) {
    this.bootstrapColFirst = this.firstPosition;
    this.bootstrapColLast = this.lastPosition;
    if (!this.displayDesc[id]) {
      this.incSize();
    }
    this.displayDesc[id] = !this.displayDesc[id];
  }

  checkSectionCondition(id): boolean {

    return this.displayDesc[id]
  }

  checkContentCondition(id): boolean {

    return this.displayContent[id]
  }


  showContent(id) {
    this.bootstrapColFirst = this.firstPosition;
    this.bootstrapColLast = this.lastPosition;
    if (!this.displayContent[id]) {
      this.incSizeContent();
      this.showSectionComponent = false;
    } else {
      this.showSectionComponent = true;
    }
    this.displayContent[id] = !this.displayContent[id];
  }

  showContentTitle(id) {
    this.currentBookSection = id;
    this.bookSectionService.getContentBySectionID(id).subscribe(data => {
      this.bookContents = data;
    });

    this.displayContent = new Array<boolean>(this.bookContents.length);
    let i: number;
    for (i = 0; i < this.displayContent.length; i++) {
      this.displayContent[i] = false;
    }
  }

  removeContent(uid: any) {
    console.log("removecontent");
    this.bookSectionService.removeContent(uid).subscribe(() => {
      this.gotoList();
    }, error => console.error(error));
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

  gotoList() {
    this.router.navigate(['/book-list']);
  }
}
