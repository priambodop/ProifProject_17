import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RugbyService } from '../../app/services/rugby.service';

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtures.html'
})
export class Fixtures {

  items: [any];
  public status: string;

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {
    this.status = 'loading';
  }

  ngOnInit(){
    this.getFixtures();
  }

  getFixtures(){
    this.rugbyService.getFixtures().subscribe(response => {
      this.items = response;
      this.status = 'active';
    });
  }

}
