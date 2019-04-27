import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerDetails: CustModell;

  editState = false;
  itemToEdit: CustModell;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location) {
      console.log(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.GetCustomerById(id)
      .subscribe(res => this.customerDetails = res);
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();

  }

  deleteItem(item: CustModell) {
    this.customerService.deleteCustomer(item);
    this.clearState();
  }
  editItem(item: CustModell) {
    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: CustModell) {
    this.customerService.updateCustomer(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;

  }
}
