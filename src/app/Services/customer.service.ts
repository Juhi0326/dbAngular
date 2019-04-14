import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CustModell } from './../cust-modell';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  items: Observable<any>;
  itemsCollection: AngularFirestoreCollection<any>;


  constructor(private db: AngularFirestore) {
    this.items = this.db.collection('proba').valueChanges()
  }
  getCustomers() {
    return this.items;
  }
}

