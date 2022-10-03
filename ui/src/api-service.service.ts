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

  
  postBlog(headers: any): Observable<Data>{
    console.log("OK1",headers);
    var keyValues = new HttpHeaders();
    keyValues=keyValues.set('Content-Type', 'application/json');
    console.log("OK1.1",keyValues);
    headers.forEach((header: any) => {
      keyValues=keyValues.set(header.key, header.value)
      console.log("OK2",header);
      console.log("OK2.1",keyValues);
    });
    var httpOptions = {
      headers: keyValues
    };
    console.log("OK3",httpOptions);
    console.log("OK4",keyValues);
    return this.http.request<Data>( 'GET', this.router.url+"version", httpOptions);
    
  }
}
