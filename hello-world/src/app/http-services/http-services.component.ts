import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

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
    this.service.getAll()
      .subscribe(
        posts => {
          this.posts = posts;
          //console.log(response.json());
        });
  }

  //post data to given url in form of JSON
  onPostData(inputData: HTMLInputElement) {
    let post = {title: inputData.value};
    this.posts.splice(0, 0, post);
    
    inputData.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          console.log(newPost);
        },
        (error : AppError)=> {
          this.posts.splice(0, 1);
          
          if(error instanceof BadRequestError){
            //this.form.setError(error.OriginalError)
          }
          else throw error
        });
  }

  //In patch send only the modified/updated prop
  //In put send whole data (post)
  updatePost(post) {
    this.service.update(post)
    //this.http.put(this.url, JSON.stringify(post))
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  //delete a record.
  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if(error instanceof NotFoundError)
            alert('This post is already deleted');
          else throw error
        });
  }

}
