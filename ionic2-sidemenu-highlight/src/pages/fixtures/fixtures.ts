import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RugbyService } from '../../app/services/rugby.service';

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtures.html'
})
export class Fixtures {

  items: [any];

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  ngOnInit(){
    this.getFixtures();
  }

  getFixtures(){
    this.rugbyService.getFixtures().subscribe(response => {
      this.items = response;
    });
  }

}
