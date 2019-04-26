import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  title = 'Customers';
  items: CustModell[];
  editState = false;
  itemToEdit: CustModell;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
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
