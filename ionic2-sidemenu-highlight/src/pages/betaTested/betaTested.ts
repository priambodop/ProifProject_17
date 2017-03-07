import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Photo } from '../photo';
import {RugbyService} from '../../app/services/rugby.service';
import { Camera } from 'ionic-native';
@Component({
  selector: 'betaTested',
  templateUrl: 'betaTested.html'
})
export class BetaTested {

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  photos: Photo[] = [new Photo('http://placehold.it/350/150',5), new Photo('http://placehold.it/350/151',6)];

  takePhoto(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth: 500,
      correctOrientation: true
    }).then((imageData)=> {
      this.photos.push(new Photo('data:image/jpeg;base64,' + imageData,0));
    }, (err) => {
      console.log(err);
    });
  }
}
