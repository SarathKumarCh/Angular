import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //inputs:['isFavorite'] 
  /*other way to declare input properties. Problem is, if the propery is renamed (F2), all of its occurances are updated but not at this line.
   Bcz, this line creates a new property in class with given name (isFavorite:boolean).*/
})
export class FavoriteComponent {
  //@Input helps to use this in other component as prop binding
  //alias to keep the contract of component stable, we can use intead of prop name
  @Input('is-favorite') isFavorite: boolean;
  @Output('toggle') change = new EventEmitter();  

  //@Output helps to use this event in other component 
  onClick() {
    this.isFavorite = !this.isFavorite;
    //we can also pass event data in emit() as parameters - prop or obj, as shown below
    //this.change.emit(this.isFavorite);
    this.change.emit({value: 'something', newValue: this.isFavorite})
  }
}

export interface ValidateArgs {
  value: string,
  newValue: boolean
}
