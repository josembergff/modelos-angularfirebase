import { Usuario } from './../modelos/usuario';
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
  usuarioAtual: Usuario;

  constructor(public afAuth: AngularFireAuth) {
    this.usuarioAtual = new Usuario();
  }

  ngOnInit() {}

  login(): void {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(data => {
        console.log('login ', data);
      });
  }

  emailSignUp(): void {
    this.afAuth.auth
      .createUserWithEmailAndPassword(
        this.usuarioAtual.email,
        this.usuarioAtual.senha
      )
      .then(user => {
        console.log('login criado ', user);
      })
      .catch(error => {
        console.log('erro ', error);
      });
  }
  loginEmail(): void {
    this.afAuth.auth
      .signInWithEmailAndPassword(
        this.usuarioAtual.email,
        this.usuarioAtual.senha
      )
      .then(user => {
        console.log('login conectado ', user);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  resetarEmail(): void {
    this.afAuth.auth
      .sendPasswordResetEmail(this.usuarioAtual.email)
      .then(user => {
        console.log('login resetado ', user);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
