import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BookContentService} from "../shared/book-content.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-book-content-edit',
  templateUrl: './book-content-edit.component.html',
  styleUrls: ['./book-content-edit.component.css']
})
export class BookContentEditComponent implements OnInit, OnDestroy {
  bookContent: any;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookContentService: BookContentService,
  ) {

  }

  ngOnInit() {
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
