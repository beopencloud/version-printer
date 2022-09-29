import { Component ,Input,OnInit} from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from "@angular/router";
import { Data } from "./app.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  public data: Data=new Data;
  

  key="adama" 
  value="niang" 
  

  constructor(private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
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