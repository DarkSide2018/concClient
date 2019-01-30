import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BookContentService} from "../shared/book-content.service";
import {NgForm} from "@angular/forms";
import {BookSectionService} from "../shared/book-section.service";

@Component({
  selector: 'app-book-content-edit',
  templateUrl: './book-content-edit.component.html',
  styleUrls: ['./book-content-edit.component.css']
})
export class BookContentEditComponent implements OnInit, OnDestroy {
  bookContent: any;
  sub: Subscription;
  private bookSections: Array<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookContentService: BookContentService,
              private bookSectionService: BookSectionService
  ) {

  }

  ngOnInit() {
    this.bookSectionService.getAll().subscribe(data => {
      this.bookSections = data;
    });
    this.sub = this.route.queryParams.subscribe(params => {
      const id = params.id;
      if (id) {
        this.bookContentService.getContentById(id).subscribe((bookContent: any) => {
          if (bookContent) {
            this.bookContent = bookContent;
          } else {
            console.log(`BookSection with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/book-list']);
  }

  ngOnDestroy(): void {
  }

  saveContent(form: NgForm) {
    console.log(form);
   this.bookContentService.saveContent(form);
  }
}
