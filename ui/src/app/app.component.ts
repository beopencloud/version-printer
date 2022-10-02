import { Component ,Input,OnInit} from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from "@angular/router";
import { Data } from "./app.model";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  public data: Data=new Data;
  headers :any;
  cpt=1;
  

  key="adama" 
  value="niang" 
  

  constructor(private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }
addHeader(){
  //this.headers.push({key:"", value:""});
  this.cpt++;
  //console.log(this.headers.length);
}


  saveBlog(f: any) {
    let blog = {      key: f.value.key,      valeur: f.value.valeur   };
    console.log(blog)
    this.service.postBlog(blog).subscribe({
      error: (err) => { console.error(err) },
      next: (data) => {
        console.log(data);
        this.data.version = data?.version
        this.data.couleur = data?.couleur
      },
      complete: () => { }
      
    });
    
  }
  


}