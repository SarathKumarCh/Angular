import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-http-services',
  templateUrl: './http-services.component.html',
  styleUrls: ['./http-services.component.css']
})
export class HttpServicesComponent implements OnInit {
  posts : any[];
  

  //get data from given url
  constructor(private service: PostService) { 
  }

  ngOnInit(){
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
          //console.log(response.json());
        },
        error => {
          alert("An UnExpected error occured");
          console.log(error);
        });
  }

  //post data to given url in form of JSON
  onPostData(inputData: HTMLInputElement) {
    let post = {title: inputData.value};
    inputData.value = '';

    this.service.createPosts(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          console.log(response.json());
        },
        (error  :Response)=> {
          if(error.status === 400){
            //this.form.setError(error.json())
          }
          else{
            alert("An UnExpected error occured");
            console.log(error);
          }
        });
  }

  //In patch send only the modified/updated prop
  //In put send whole data (post)
  updatePost(post) {
    this.service.updatePosts(post)
    //this.http.put(this.url, JSON.stringify(post))
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          alert("An UnExpected error occured");
          console.log(error);
        });
  }

  //delete a record.
  deletePost(post) {
    this.service.deletePosts(567)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error:Response) => {
          if(error.status === 404)
            alert('This post is already deleted');
          else{
            alert("An UnExpected error occured");
            console.log(error);
          }
        });
  }

}
