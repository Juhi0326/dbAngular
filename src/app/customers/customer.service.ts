import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { CustModell } from './cust-modell';
import { AuthService } from 'src/app/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  items: Observable<CustModell[]>;
  myItems: Observable<CustModell[]>;
  itemsCollection: AngularFirestoreCollection<CustModell>;
  itemDoc: AngularFirestoreDocument<CustModell>;
  customer: Observable<CustModell>;


  constructor(private dataBase: AngularFirestore, private authservice: AuthService) {

    this.itemsCollection = this.dataBase.collection('proba', ref => ref.orderBy('lName', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CustModell;
        const id = a.payload.doc.id;
        const uid = JSON.stringify(this.authservice.userData.uid);
        return { id, uid, ...data };
      }))
    );
  }

  getCustomers() {
    return this.items;
  }

  getMycustomers() {
    return this.items.pipe(
      map(
        myCustomers => myCustomers.filter(
          cust => cust.uid === JSON.stringify(this.authservice.userData.uid)
        )));
  }
  GetCustomerById(id: string): Observable<CustModell> {
    this.itemDoc = this.dataBase.doc(`proba/${id}`);
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
    this.itemDoc = this.dataBase.doc(`proba/${item.id}`);
    this.itemDoc.delete().then
      (function () {
        console.log('Document successfully deleted!');
      }).catch(function (error) {
        console.error('Error removing document: ', error);
      });
  }

  updateCustomer(item: CustModell) {
    this.itemDoc = this.dataBase.doc(`proba/${item.id}`);
    this.itemDoc.update(item);
  }



}
