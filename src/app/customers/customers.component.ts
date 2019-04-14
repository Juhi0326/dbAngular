import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title = 'Angular with FireBase';
  data: Observable<any[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.data = this.customerService.getCustomers();
  }

}
