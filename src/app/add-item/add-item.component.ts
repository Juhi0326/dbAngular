import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../Services/customer.service';
import { CustModell } from './../cust-modell';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
item: CustModell = {
  age: 0,
  email: '',
  fName: '',
  gender: '',
  isFullTime: false,
  lName: '',
  yearsOfExperience: 0
};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}
