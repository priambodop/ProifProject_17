import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController, Nav } from 'ionic-angular';
import {Camera,File} from 'ionic-native';
import {Http} from '@angular/http';
import {PhotoEditor} from '../photoEditor/photoEditor';

declare var cordova: any;

@Component({
  selector: 'teammate',
  templateUrl: 'teammate.html'
})
export class Teammate {

  public base64Image: string;

  lastImage:string = null;
  items: any;
  path:string = null;
  navi: any;

  // items: [any];
  // public status: string;
  // private imageSrc: string;
  // public base64Image: string;
  //
  // cameraData: string;
  // photoTaken: boolean;
  // cameraUrl: string;
  // photoSelected: boolean;
  // photos: Photo[] = [new Photo('http://placehold.it/350/150')]


  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  public http: Http,
  public toastCtrl: ToastController,
  public loadingController: LoadingController,
  public nav: Nav) {
    this.navi = nav;
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => this.items = res.json());
    console.log(this.items);

  }

  takePhoto(){
    console.log(cordova.file);

    var options = {
      quality:50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };

    Camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.lastImage = this.base64Image;
      this.navCtrl.push(PhotoEditor, {base64: this.lastImage});
    },(err) => {
      console.log(err);
    });
  }

  selectFromGallery(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 400,
      targetHeight: 400
    };

    Camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/png;base64,' + imageData;
      this.lastImage = this.base64Image;
      this.navCtrl.push(PhotoEditor, {base64:this.lastImage});
    }, (err) => {
      console.log(err);
    });
  }

  // copy image ke folder lokal
  private copyFileToLocalDir(namePath, currentName, base64Image){
    File.copyFile(namePath, currentName, cordova.file.dataDirectory, base64Image).then(success => {
      this.lastImage = base64Image;
    }, error => {
      this.presentToast('Terjadi Error saat menyimpan file');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  public pathForImage(img){
    if(img === null){
      return '';
    } else{
      return cordova.file.dataDirectory + img;
    }
  }

  // movePage(){
  //   this.navi.setRoot(PhotoEditor);
  // }

  // ngOnInit(){
  //   this.getTeammates();
  // }

  // getTeammates(){
  //   this.rugbyService.getTeammates().subscribe(response =>{
  //     this.items = response;
  //     this.status = 'active';
  //   });
  // }

  // takePhoto(){
  //   Camera.getPicture({
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     targetHeight:500,
  //     targetWidth:500,
  //     correctOrientation:true
  //   }).then((imageData) => {
  //     this.photos.push(new Photo('data:image/jpeg;base64,' + imageData));
  //   }, (err) =>{
  //     console.log(err);
  //   });
  // }

  // selectFromGallery() {
  //   Camera.getPicture({
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     encodingType: Camera.EncodingType.JPEG,
  //     sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  //   }).then ((imageData) => {
  //     this.base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     console.log(err);
  //   });
  //   }
  }
