import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RugbyService } from './services/rugby.service';
import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teammate } from '../pages/teammate/teammate';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { RugbyClubs } from '../pages/rugbyClubs/rugbyClubs';



@Component({
  selector: 'app',
  templateUrl: 'app.html',
  providers: [RugbyService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = News;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: News},
      { title: 'Fixtures & Results',  component: Fixtures},
      { title: 'Teammate Photos', component: Teammate },
      { title: 'Rugby 101', component: Rugby101 },
      { title: 'Rugby Clubs', component: RugbyClubs },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  home(){
    this.nav.setRoot(News);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
