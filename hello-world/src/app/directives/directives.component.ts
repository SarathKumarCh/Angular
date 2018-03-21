import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  courses = [2, 3, 4, 6];
  viewMode = 'map';
  authors;
  //viewMode = 'something';
  getAuthors() {
    this.authors = [
      { id:1, name:'author1' },
      { id:2, name:'author2' },
      { id:3, name:'author3' },
      { id:4, name:'author4' },
    ];
  }

  trackAuthors(index, author){
    return author? author.id : undefined
  }

  onAdd() {
    this.authors.push({id: 5, name:'author5'});
  }

  onRemove(author){
    let index = this.authors.indexOf(author);
    this.authors.splice(index, 1);
  }
}
