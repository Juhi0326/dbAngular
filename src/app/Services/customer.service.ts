import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CustModell } from './../cust-modell';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  items: Observable<CustModell[]>;
  itemsCollection: AngularFirestoreCollection<CustModell>;
  itemDoc: AngularFirestoreDocument<CustModell>;


  constructor(private db: AngularFirestore) {

    this.itemsCollection = this.db.collection('proba', ref => ref.orderBy('lName', 'asc'));

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
  deleteCustomer(item: CustModell) {
    console.log(item);
    this.itemDoc = this.db.doc(`proba/${item.id}`);
      console.log(this.itemDoc);
    this.itemDoc.delete().then(function() {
      console.log('Document successfully deleted!');
  }).catch(function(error) {
      console.error('Error removing document: ', error);
  });
  }
}
