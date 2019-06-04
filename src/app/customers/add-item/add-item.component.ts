import { Component, OnInit } from '@angular/core';
import { CustModell } from './../cust-modell';
import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';

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

  constructor(private customerService: CustomerService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.age > 0 && this.item.email !== '' &&
      this.item.fName !== '' && this.item.gender !== '' &&
      this.item.lName !== '') {
      this.customerService.addCustomer(this.item);
      this.item.age = 0;
      this.item.email = '';
      this.item.fName = '';
      this.item.lName = '';
      this.item.gender = '';
      this.item.isFullTime = false;
      this.item.yearsOfExperience = 0;
      this.goBack();
    }
  }

  goBack(): void {
    this.location.back();
  }

}