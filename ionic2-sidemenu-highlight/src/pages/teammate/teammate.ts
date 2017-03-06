import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RugbyService } from '../../app/services/rugby.service';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'teammate',
  templateUrl: 'teammate.html'
})
export class Teammate {

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
      console.log(response);
    });
  }

}
