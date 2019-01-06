import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookSectionService {

  constructor(private http: HttpClient) {

  }
  public getAll(): Observable<any> {

    return this.http.get('//localhost:8080/bookSection');
  }

  public getAllContent(): Observable<any> {

    return this.http.get('//localhost:8080/bookContent');
  }
  public getContentByID(id): Observable<any>{
    return this.http.get('//localhost:8080/bookSectionById?' + 'id=' + id)
  }
}
