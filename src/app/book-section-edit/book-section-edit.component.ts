import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BookSectionService} from "../shared/book-section.service";

@Component({
  selector: 'app-book-section-edit',
  templateUrl: './book-section-edit.component.html',
  styleUrls: ['./book-section-edit.component.css']
})
export class BookSectionEditComponent implements OnInit, OnDestroy {
  bookSection: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookSectionService: BookSectionService
  ) {
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log('params = '+params.id);
      const id = params['id'];
      if (id) {
        this.bookSectionService.getContentByID(id).subscribe((car: any) => {
          if (car) {
            this.bookSection = car;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }

  save(form: NgForm) {
    this.bookSectionService.save(form).subscribe(() => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.bookSectionService.remove(href).subscribe(() => {
      this.gotoList();
    }, error => console.error(error));
  }

}
