import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RugbyService } from '../../app/services/rugby.service';

@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class News {

  items : [any];
  public status: string;

  constructor(public navCtrl: NavController, private rugbyService: RugbyService) {
      this.status = 'loading';
  }

  ngOnInit(){
    this.getPosts(); 
  }

  getPosts(){
    this.rugbyService.getPosts().subscribe(response => {
      this.items = response;
      this.status = 'active';
    });
  }

}
