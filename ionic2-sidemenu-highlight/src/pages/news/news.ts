import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RugbyService } from '../../app/services/rugby.service';

@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class News {

  items : [any];

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {

  }

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.rugbyService.getPosts().subscribe(response => {
      this.items = response;
    });
  }

}
