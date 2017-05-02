import { Component, ViewChild, ElementRef } from '@angular/core';
import {Camera, File} from 'ionic-native';
import { NavController, ToastController,LoadingController, Loading, NavParams, Nav } from 'ionic-angular';
import {Http} from '@angular/http';
import {Teammate} from '../../pages/teammate/teammate';

declare var cordova: any;

@Component({
  selector: 'photoEditor',
  templateUrl: 'PhotoEditor.html'
})
export class PhotoEditor {

  @ViewChild('canvasContent') canvasContent: ElementRef;
  base64Image:string;
  dataUrl:string = 'url';
  frame:string;
  lastImage: string;
  loading: Loading;
  json:any;
  navig: any;

  constructor(public navCtrl: NavController,
  public http:Http,
  public nav:Nav,
  public navParams: NavParams,
  public toastCtrl: ToastController,
  public loadingCtrl: LoadingController) {
    this.json = 'json';
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => this.json = res.json());
    this.navig = nav;
    this.base64Image = navParams.get('base64');

  }

  //buat nama baru untuk image nya
  private createFileName(){
    var d = new Date(),
    n = d.getTime(),
    newFileName = n + ".jpg";
    return newFileName;
  }

  //copy image ke folder lokal
  private copyFileToLocalDir(namePath, currentName, newFileName){
    File.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
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

  public uploadImage(){
    //destination url
    var url = "https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json";

    //file for upload
    var targetPath = this.pathForImage(this.lastImage);

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });

    this.loading.present();
    this.ngAfterViewInit();
    this.dataUrl = this.dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");
    var dataPost = 'userId=frameoo&photo=' + this.dataUrl;

    this.http.post(url, dataPost).subscribe(res => this.json = res.json());
    console.log('asd' + JSON.stringify(this.json));
    this.loading.dismissAll();
    this.movePage();

  }

  ngAfterViewInit() { // wait for the view to init before using the element
    let context: CanvasRenderingContext2D = this.canvasContent.nativeElement.getContext("2d");

    let base_image = new Image();
    let frameoo = new Image();
    frameoo.src = this.frame;
    base_image.onload = function(){
      context.drawImage(base_image, 0, 0, 400, 400);
      context.drawImage(frameoo, 0, 0);
    };
    base_image.src = this.base64Image;
    this.dataUrl = this.canvasContent.nativeElement.toDataURL();

  }

  selectFrame(frame:string){
    if(frame==='frame01'){
      this.frame = "assets/img/frame01.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame02'){
      this.frame = "assets/img/frame02.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame03'){
      this.frame = "assets/img/frame03.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame04'){
      this.frame = "assets/img/frame04.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame05'){
      this.frame = "assets/img/frame05.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame06'){
      this.frame = "assets/img/frame06.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame07'){
      this.frame = "assets/img/frame07.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame08'){
      this.frame = "assets/img/frame08.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame09'){
      this.frame = "assets/img/frame09.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame10'){
      this.frame = "assets/img/frame10.png";
      this.ngAfterViewInit();
    }
  }

  movePage(){
    this.navig.setRoot(Teammate);
  }

}
