import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title = 'Angular with FireBase';
  data: Observable<any[]>;
  constructor(private db: AngularFirestore, private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers();
  }

}
