import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RugbyService{
  http: any;
  baseUrl: String;
  fixturesUrl: String;
  clubsUrl: String;
  teammatesUrl: String;

  constructor(http:Http){

    this.http = http;
    this.baseUrl = "https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json ";
    this.fixturesUrl = "https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json";
    this.clubsUrl = "https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json";
    this.teammatesUrl = "https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json"
  }

  getPosts(){
    return this.http.get(this.baseUrl).map(res => res.json());
  }

  getFixtures(){
    return this.http.get(this.fixturesUrl).map(res => res.json());
  }

  getClubs(){
    return this.http.get(this.clubsUrl).map(res => res.json());
  }

  getTeammates(){
    return this.http.get(this.teammatesUrl).map(res => res.json());
  }

}
