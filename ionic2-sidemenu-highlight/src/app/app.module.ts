import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teammate } from '../pages/teammate/teammate';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { RugbyClubs } from '../pages/rugbyClubs/rugbyClubs';


@NgModule({
  declarations: [
    MyApp,
    News,
    Teammate,
    Rugby101,
    RugbyClubs,
    Fixtures,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    News,
    Teammate,
    Rugby101,
    RugbyClubs,
    Fixtures,
    

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
