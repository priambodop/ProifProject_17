import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Photo } from '../photo';
import {RugbyService} from '../../app/services/rugby.service';

@Component({
  selector: 'betaTested',
  templateUrl: 'betaTested.html'
})
export class BetaTested {

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  photos: Photo[] = [new Photo('http://placehold.it/350/150',5), new Photo('http://placehold.it/350/151',6)];

}
