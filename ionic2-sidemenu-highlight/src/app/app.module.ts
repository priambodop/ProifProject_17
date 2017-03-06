import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teammate } from '../pages/teammate/teammate';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { RugbyClubs } from '../pages/rugbyClubs/rugbyClubs';
import { BetaTested } from '../pages/betaTested/betaTested';
import { RugbyService } from './app/services/rugby.service'

@NgModule({
  declarations: [
    MyApp,
    //Page1,
    //Page2,
    News,
    Teammate,
    Rugby101,
    RugbyClubs,
    Fixtures,
    BetaTested
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //Page1,
    //Page2,
    News,
    Teammate,
    Rugby101,
    RugbyClubs,
    Fixtures,
    BetaTested

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
