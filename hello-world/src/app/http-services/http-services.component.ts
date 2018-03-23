import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent {
  posts : any[];

  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
        //console.log(response.json());
      })
  }


}
