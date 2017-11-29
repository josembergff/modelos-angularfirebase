import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent implements OnInit {
  mostrarFormulario: Boolean;

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {}

  login(): void {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(data => {
        console.log('login ', data);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
