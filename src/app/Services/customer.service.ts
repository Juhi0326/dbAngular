import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CustModell } from './../cust-modell';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  items: Observable<any>;
  custCollection: AngularFirestoreCollection<CustModell>;

  constructor(private db: AngularFirestore) {
    this.custCollection = this.db.collection('proba');
  }
  getCustomers() {
    this.items = this.db.collection('proba').valueChanges();
    return this.items;
  }
}

