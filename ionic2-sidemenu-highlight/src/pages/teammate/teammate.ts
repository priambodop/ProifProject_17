import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RugbyService} from '../../app/services/rugby.service';

@Component({
  selector: 'teammate',
  templateUrl: 'teammate.html'
})
export class Teammate {
  items: [any];

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  ngOnInit(){
    this.getTeammates();
  }

  getTeammates(){
    this.rugbyService.getTeammates().subscribe(response => {
      this.items = response;
    });
  }
}
