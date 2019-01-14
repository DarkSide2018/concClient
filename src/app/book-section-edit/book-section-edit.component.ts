import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BookSectionService} from "../shared/book-section.service";
import {AppComponent} from "../app.component";

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
              private bookSectionService: BookSectionService,
              private appComponent:AppComponent
  ) {
  }
  accessData(){
    this.appComponent.showData = true;
  }
  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log('params = '+params.id);
      const id = params.id;
      if (id) {
        this.bookSectionService.getSectionById(id).subscribe((bookSection: any) => {
          if (bookSection) {
            this.bookSection = bookSection;
          } else {
            console.log(`BookSection with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/book-list']);
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
