import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { HttpClientExt } from 'angular-extended-http-client'
import { Data } from "./app/app.model";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  
  postBlog(blog: any): Observable<Data>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }).set(blog.key, blog.valeur)
      
    };
    return this.http.request<Data>( 'GET', this.router.url+"version", httpOptions);
  }
}
