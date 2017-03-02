import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RugbyService} from '../../app/services/rugby.service';

@Component({
  selector: 'rugbyClubs',
  templateUrl: 'rugbyClubs.html'
})
export class RugbyClubs {

  items: [any];
  public status: string;


  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {
    this.status = 'loading';
  }

  ngOnInit(){
    this.getClubs();
  }

  getClubs(){
    this.rugbyService.getClubs().subscribe(response => {
      this.items = response;
      this.status = 'active';
    });
  }

}
