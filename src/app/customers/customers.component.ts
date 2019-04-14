import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title = 'Angular with FireBase';
  items: any[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(items => {
      this.items = items;
    });
  }

}
