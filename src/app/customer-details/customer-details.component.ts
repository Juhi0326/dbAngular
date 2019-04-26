import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  items: CustModell[];
  editState = false;
  itemToEdit: CustModell;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute) {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
     }

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
