import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookSectionService {
  bookAPI: string = '//localhost:8080';

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<any> {

    return this.http.get(this.bookAPI + '/bookSection');
  }

  public getContentBySectionID(id): Observable<any> {
    return this.http.get(this.bookAPI + '/bookContentBySectionId?' + 'id=' + id)
  }
  public getSectionById(id): Observable<any> {
    return this.http.get(this.bookAPI + '/bookSectionById?' + 'id=' + id)
  }
  save(section: any): Observable<any> {
    let result: Observable<Object>;
    if (section['href']) {
      result = this.http.put(this.bookAPI + '/bookSection', section);
    } else {
      result = this.http.post(this.bookAPI + '/bookSection', section);
    }
    return result;
  }

  remove(href: string) {
    console.log('href from delete = ' + href);
    return this.http.delete(href);
  }
}
