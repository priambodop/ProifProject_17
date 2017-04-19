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
  items: [any];
  public status: string;
  private imageSrc: string;
  public base64Image: string;

  cameraData: string;
  photoTaken: boolean;
  cameraUrl: string;
  photoSelected: boolean;
  photos: Photo[] = [new Photo('http://placehold.it/350/150')]

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {
    this.status = 'loading';
  }

  ngOnInit(){
    this.getTeammates();
  }

  getTeammates(){
    this.rugbyService.getTeammates().subscribe(response =>{
      this.items = response;
      this.status = 'active';
    });
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

  selectFromGallery() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG, 
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    }).then ((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
    }
  }
