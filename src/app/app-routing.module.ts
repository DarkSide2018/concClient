import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import {BookListComponent} from "./book-list/book-list.component";
import {BookSectionEditComponent} from "./book-section-edit/book-section-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  {
    path: 'book-section-edit',
    component: BookSectionEditComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
