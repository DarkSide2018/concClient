import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookContentService {
  bookAPI: string = '//localhost:8080';

  constructor(private http: HttpClient) {

  }

  public getContentById(id): Observable<any> {
    return this.http.get(this.bookAPI + '/bookContentById?' + 'id=' + id)
  }
}
