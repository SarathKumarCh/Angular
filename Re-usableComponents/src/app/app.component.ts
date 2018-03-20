import { Component } from '@angular/core';
import { ValidateArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'app',
    isFavorite: true
  }

  // onFavoriteChanged(obj){
  //   console.log('button clicked - ' + obj);
  // }

  /*we can also validate the obj/prop passed by using type annotation,but this becomes code messy, 
  so we can declare a interface here (or) in component and export it as shown below.*/

  onFavoriteChanged(obj: ValidateArgs) {
    this.post.isFavorite = obj.newValue;
    console.log('button clicked - ' + obj.newValue);
  }
}
