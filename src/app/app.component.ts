import { Component ,OnInit} from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  key="" 
  value=""  

  constructor(private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBlog() {

    let blog = {      key: this.key,      value: this.value   };
    this.service.postBlog(blog).subscribe({
      error: (err) => { console.error(err) },
      complete: () => { this.router.navigate(['./']) }
    });
  }


}