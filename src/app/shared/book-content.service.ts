import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BookContentService {
  bookAPI: string = '//localhost:8080';

  constructor(private http: HttpClient) {
  }

   public getContentById(id): Observable<any> {
    console.log("get content by id");
    console.log("id = " + id);
    return this.http.get(this.bookAPI + '/bookContentById?' + 'id=' + id)
  }

  public saveContent(form: any) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*',
      'Access-Control-Allow-Headers':'*'
    });
    let result: Observable<Object>;
    var jsonString = JSON.stringify(form);
    console.log(jsonString);
    this.http.post('//localhost:8080/bookContent',
      jsonString,{headers:headers})
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}
