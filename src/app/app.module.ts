import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDi2YOCedTijFZ-UqVHfKI-kN2lLcnJjIc',
  authDomain: 'vife-votos.firebaseapp.com',
  databaseURL: 'https://vife-votos.firebaseio.com',
  projectId: 'vife-votos',
  storageBucket: '',
  messagingSenderId: '872271470'
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
