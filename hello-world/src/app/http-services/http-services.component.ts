import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent {
  posts : any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  //get data from given url
  constructor(private http: Http) { 
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
        //console.log(response.json());
      })
  }

  //post data to given url in form of JSON
  onPostData(inputData: HTMLInputElement) {
    let post = {title: inputData.value};
    inputData.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      })
  }

  //In patch send only the modified/updated prop
  //In put send whole data (post)
  updatePost(post) {
    this.http.patch(this.url + '/' +post.id, JSON.stringify({isRead: true}))
    //this.http.put(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      })
  }

  //delete a record.
  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }

}
