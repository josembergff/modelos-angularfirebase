import { Curso } from './modelos/curso';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Observable<Curso[]>;
  private itemsCollection: AngularFirestoreCollection<Curso>;
  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.itemsCollection = this.db.collection<Curso>('/materias');
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      actions.sort((a: any, b: any) => {
        return b.payload.doc.data().votos - a.payload.doc.data().votos;
      });
      return actions.map(a => {
        const data = a.payload.doc.data() as Curso;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  votar(valor: Curso): void {
    const obj = this.itemsCollection.doc(valor.id.toString());
    const votacao: number = (valor.votos ? valor.votos.valueOf() : 0) + 1;
    const emails = valor.emails || [];
    if (emails.indexOf(this.afAuth.auth.currentUser.email) < 0) {
      emails.push(this.afAuth.auth.currentUser.email);
    }
    obj.update({ votos: votacao, emails: emails });
  }

  excluir(valor: Curso): void {
    const obj = this.itemsCollection.doc(valor.id.toString());
    obj.delete();
  }
}
