import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { RugbyService } from './services/rugby.service';
import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teammate } from '../pages/teammate/teammate';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { RugbyClubs } from '../pages/rugbyClubs/rugbyClubs';
import { BetaTested } from '../pages/betaTested/betaTested';


@Component({
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
      //{ title: 'Page One', component: Page1 },
      //{ title: 'Page Two', component: Page2 },
      { title: 'News', component: News },
      { title: 'Fixtures & Results',  component: Fixtures},
      { title: 'Teammate Photos', component: Teammate },
      { title: 'Rugby 101', component: Rugby101 },
      { title: 'Rugby Clubs', component: RugbyClubs },
      { title: 'Beta Tested', component: BetaTested }
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
