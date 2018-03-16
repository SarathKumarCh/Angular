import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  title = 'List of Authors';
  colSpan = 2;  
  imgUrl="http://mherman.org/assets/img/blog/angular-logo.png";

  getLength(){
    return this.title.length;
  }

  authors = ['author1', 'author2', 'author3'];
  anotherAuthors;

  //Getting data from service
  constructor(service: AuthorService){
    //let service = new AuthorService(); //we can remove this for better coding
    this.anotherAuthors = service.getAuthors();
  }
}
