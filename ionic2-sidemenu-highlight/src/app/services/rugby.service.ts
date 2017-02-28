import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RugbyService{
  http: any;
  baseUrl: String;
  fixturesUrl: String;

  constructor(http:Http){
    this.http = http;
  }

  getPosts(){
    return this.http.get(this.baseUrl).map(res => res.json());
  }
}
