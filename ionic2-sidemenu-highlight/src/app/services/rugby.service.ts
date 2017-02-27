import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RugbyService{
  http: any;
  baseUrl: String;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = "https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json "; 
  }

  getPosts(){
    return this.http.get(this.baseUrl).map(res => res.json());
  }
}
