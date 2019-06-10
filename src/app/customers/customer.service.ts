import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { CustModell } from './cust-modell';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  items: Observable<CustModell[]>;
  itemsCollection: AngularFirestoreCollection<CustModell>;
  itemDoc: AngularFirestoreDocument<CustModell>;
  customer: Observable<CustModell>;


  constructor(private db: AngularFirestore) {

    this.itemsCollection = this.db.collection('proba', ref => ref.orderBy('lName', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CustModell;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).pipe(publishReplay(1)).pipe(refCount());
  }
  getCustomers() {
    return this.items;
  }
  GetCustomerById(id: string): Observable<CustModell> {
    this.itemDoc = this.db.doc(`proba/${id}`);
    this.customer = this.itemDoc.snapshotChanges().pipe(map(action => {
      if (!action.payload.exists) {
        return null;
      } else {
        const data = action.payload.data() as CustModell;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.customer;


  }
  addCustomer(item: CustModell) {
    this.itemsCollection.add(item);
  }
  deleteCustomer(item: CustModell) {
    this.itemDoc = this.db.doc(`proba/${item.id}`);
    this.itemDoc.delete().then(function () {
    }).catch(function (error) {
      console.error('Error removing document: ', error);
    });
  }

  updateCustomer(item: CustModell) {
    this.itemDoc = this.db.doc(`proba/${item.id}`);
    this.itemDoc.update(item);
  }



}
