import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { AppError } from '../src/app/common/app-error';
import { NotFoundError } from '../src/app/common/not-found-error';
import { BadRequestError } from '../src/app/common/bad-request-error';

@Injectable()
export class DataService {
  constructor(private url, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.errorHandler);
  }

  create(resource) {
      //for testing optimistic update      
      return Observable.throw(new AppError);

    // return this.http.post(this.url, JSON.stringify(resource))
    //     .map(response => response.json())
    //     .catch(this.errorHandler);
  }

  update(resource) {
    return this.http.patch(this.url + '/' +resource.id, JSON.stringify({isRead: true}))
        .map(response => response.json())
        .catch(this.errorHandler);    
  }

  delete(id) {
      //for testing optimistic update
    return Observable.throw(new AppError);
      
    // return this.http.delete(this.url + '/' + id)
    //     .map(response => response.json())
    //     .toPromise() //-This code conversts observables to promise 
    //     .catch(this.errorHandler);
  }

  private errorHandler(error: Response){
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error.json()));

    if(error.status === 404)
      return Observable.throw(new NotFoundError);

    return Observable.throw(new AppError(error));
  }

}
