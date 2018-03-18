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
  isActive = true;
  text = 'wrkus fiu erks fnvpw ljad fu erd bviu reh sfv oe hr fsui ge bbv eu rrgl ef u yfg rejd nl ijd3 hh fvbi yer oij ov';

  getLength(){
    return this.title.length;
  }

  onDivClick(){
    console.log(this.isActive);
  }
  onClick($event){
    $event.stopPropagation(); //stops event bubbling (onDivClick())
    ((this.isActive)? console.log('button is active') : console.log('button is not active'));
    this.isActive = !this.isActive;
  }

  onKeyUp(){
    console.log('enter clicked');
  }
  
  onEnter(name) {
    console.log(name);
  }

  email = 'S@angular.com';
  onTwoWay(){
    console.log(this.email);
  }

  authors = ['author1', 'author2', 'author3'];
  anotherAuthors;
  details;

  //Getting data from service
  constructor(service: AuthorService){
    //let service = new AuthorService(); //we can remove this for better coding
    this.anotherAuthors = service.getAuthors();
    this.details = service.getPipeDetails();
  }
}
