import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarEditComponent } from './car-edit/car-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookChapterListComponent } from './book-chapter-list/book-chapter-list.component';
import { BookSectionListComponent } from './book-section-list/book-section-list.component';
import { BookContentListComponent } from './book-content-list/book-content-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BookChapterEditComponent } from './book-chapter-edit/book-chapter-edit.component';
import { BookContentEditComponent } from './book-content-edit/book-content-edit.component';
import { BookSectionEditComponent } from './book-section-edit/book-section-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    BookListComponent,
    BookChapterListComponent,
    BookSectionListComponent,
    BookContentListComponent,
    BookChapterEditComponent,
    BookContentEditComponent,
    BookSectionEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {

  }


}
