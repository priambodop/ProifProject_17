import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import {RugbyService} from '../../app/services/rugby.service';
=======
import { RugbyService } from '../../app/services/rugby.service';
import { AlertController } from 'ionic-angular';

>>>>>>> origin/master

@Component({
  selector: 'teammate',
  templateUrl: 'teammate.html'
})
export class Teammate {
  items: [any];

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

<<<<<<< HEAD
  }

  ngOnInit(){
    this.getTeammates();
=======
  items : [any];

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public rugbyService: RugbyService) {

  }

  ngOnInit(){
    this.getTeammates();
  }

  uploadAlert(){
    let alert = this.alerCtrl.create({
      title: 'Alert',
      message: 'Coming Soon!',
      buttons: ['Ok']
    });
    alert.present()
  }

  getTeammates(){
    this.rugbyService.getTeammates().subscribe(response => {
      this.items = response.data;
    });
>>>>>>> origin/master
  }

  getTeammates(){
    this.rugbyService.getTeammates().subscribe(response => {
      this.items = response;
    });
  }
}
