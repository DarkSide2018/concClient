import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookSectionEditComponent} from "./book-section-edit/book-section-edit.component";
import {BookContentEditComponent} from "./book-content-edit/book-content-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  {
    path: 'book-content-edit',
    component: BookContentEditComponent
  },
  {
    path: 'book-section-edit',
    component: BookSectionEditComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
