import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from '../src/app/common/app-error';
import { NotFoundError } from '../src/app/common/not-found-error';
import { BadRequestError } from '../src/app/common/bad-request-error';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400)
          return Observable.throw(new BadRequestError(error.json()));

        return Observable.throw(new AppError(error.json()));
      });
  }

  updatePosts(post) {
    return this.http.patch(this.url + '/' +post.id, JSON.stringify({isRead: true}));    
  }

  deletePosts(id) {
    return this.http.delete(this.url + '/' + id)
      .catch((error : Response) => {
        if(error.status === 404)
          return Observable.throw(new NotFoundError);

        return Observable.throw(new AppError(error));
        
      });
  }

}
