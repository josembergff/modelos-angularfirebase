import { AngularFireAuthProvider } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AutenticarComponent } from './autenticar/autenticar.component';

@NgModule({
  declarations: [AppComponent, AutenticarComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [AngularFireAuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
