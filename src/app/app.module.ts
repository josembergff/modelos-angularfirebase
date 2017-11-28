import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
