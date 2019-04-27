import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title = 'Customers';
  items: CustModell[];
  editState = false;
  itemToEdit: CustModell;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(items => {
      this.items = items;
    });
  }

  navigate(id: string) {
    this.router.navigate([`/customer-details/${id}`]);
  }

  refresh() {
    this.customerService.getCustomers().subscribe(items => {
      this.items = items;
    });
  }
}
