import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RugbyService} from '../../app/services/rugby.service';

@Component({
  selector: 'rugbyClubs',
  templateUrl: 'rugbyClubs.html'
})
export class RugbyClubs {

  items: [any];

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  ngOnInit(){
    this.getClubs();
  }

  getClubs(){
    this.rugbyService.getClubs().subscribe(response => {
      this.items = response;
    });
  }

}
