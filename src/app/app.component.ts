import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/cursos');
  }

  abrirItem(id: string) {
    const obj = this.db.object('/cursos/' + id);
    obj.$ref.transaction(item => {
      let total = item.votos || 0;
      total++;
      this.items.update(id, { votos: total });
    });
    console.log('Id clicado ', obj);
  }
}
