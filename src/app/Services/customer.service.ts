import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CustModell } from './../cust-modell';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  items: Observable<any>;
  itemsCollection: AngularFirestoreCollection<any>;


  constructor(private db: AngularFirestore) {

    this.itemsCollection = this.db.collection('proba');

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CustModell;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getCustomers() {
    return this.items;
  }
  addCustomer(item: CustModell) {
    this.itemsCollection.add(item);
  }
}