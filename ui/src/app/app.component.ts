import { Component ,Input,OnInit} from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from "@angular/router";
import { Data } from "./app.model";

import { FormGroup, FormControl, NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
 profileForm!: FormGroup;
// profileForm = new FormGroup({
//   key:new FormControl(),
//   valeur:new FormControl()

// });
  
  public data: Data=new Data;
  headers :any;
  header_fields: number[]=[];
  

 
  

  constructor(private service: ApiServiceService, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
addHeader(){
  //this.headers.push({key:"", value:""});
  const t = Date.now();
  this.profileForm.addControl("key"+t, new FormControl('', Validators.required));
  this.profileForm.addControl("value"+t, new FormControl('', Validators.required));

  this.header_fields.push(t)
}


initForm(){
  this.profileForm = new FormGroup({
    key:new FormControl("''"),
    valeur:new FormControl("")
  });
}

  saveBlog(profileForm: any) {
    var headers: { key: any; value: any; }[] = [];
    this.header_fields.forEach(element => {
      var key = this.profileForm.get("key"+element)?.value
      var value = this.profileForm.get("value"+element)?.value
      headers.push({
        key: key,
        value:value
      })
    console.log(headers)
    });
    // let blog = {      header: profileForm.value  };
    
    this.service.postBlog(headers).subscribe({
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