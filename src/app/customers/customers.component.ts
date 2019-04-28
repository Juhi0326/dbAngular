import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


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
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(items => {
      this.items = items;
    });
  }

  goBack(): void {
    this.location.back();
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
