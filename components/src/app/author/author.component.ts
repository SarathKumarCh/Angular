import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  template: `
    <!-- String Interpolation -->
    <h2> {{ "Title: " + title }} </h2>
    <h3>{{ "Length of Title is " + getLength() }}</h3>
    <ul>
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul>
    <ul>
      <li *ngFor="let author of anotherAuthors">{{ author }}</li>
    </ul>

  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  title = 'List of Authors'

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
