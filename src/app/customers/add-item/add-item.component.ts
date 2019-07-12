import { Component, OnInit } from '@angular/core';
import { CustModell } from './../cust-modell';
import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;

  item: CustModell = {
    age: 0,
    email: '',
    fName: '',
    gender: '',
    isFullTime: false,
    lName: '',
    yearsOfExperience: 0
  };

  constructor(
    private customerService: CustomerService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addItemForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(120)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      fullTime: [true, [Validators.required]],
      yearsOfExperience: [0, [Validators.required, Validators.max(80)]]
    });
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
