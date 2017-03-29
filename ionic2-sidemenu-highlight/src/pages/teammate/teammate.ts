import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RugbyService} from '../../app/services/rugby.service';
import { AlertController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import {Photo} from '../photo';

@Component({
  selector: 'teammate',
  templateUrl: 'teammate.html'
})
export class Teammate {
  public base64Image: string;
  photos: Photo[] = [new Photo('http://placehold.it/350/150')]

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  takePhoto(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight:500,
      targetWidth:500,
      correctOrientation:true
    }).then((imageData) => {
      this.photos.push(new Photo('data:image/jpeg;base64,' + imageData));
    }, (err) =>{
      console.log(err);
    });
  }
}
