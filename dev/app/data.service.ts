import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor(private _http:Http) {}
    //console.log('going to get data');

    getResults(): Observable<any> {
      return this._http.get ('http://localhost:3000/data/mock.data.results.json')
        //http://jsonplaceholder.typicode.com/posts
        .map(response => response.json());
    }

    getSaved(): Observable<any> {
      return this._http.get ('http://localhost:3000/data/mock.data.saved.json')
        //http://jsonplaceholder.typicode.com/posts
        .map(response => response.json());
    }

  }
