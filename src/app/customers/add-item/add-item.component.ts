import { Component, OnInit } from '@angular/core';
import { CustModell } from './../cust-modell';
import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './../../shared/messages/message.service';

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
    private fb: FormBuilder,
    public ms: MessageService
  ) { }

  ngOnInit() {
    this.addItemForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40),
      Validators.pattern(/^[a-zA-ZáéíóőúűÁÉÍÓŐÚŰ]+$/)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40),
      Validators.pattern(/^[a-zA-ZáéíóőúűÁÉÍÓŐÚŰ]+$/)]],
      age: [0, [Validators.required, Validators.min(18), Validators.max(120), Validators.pattern(/^\d{1,3}$/)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      fullTime: [true, [Validators.required]],
      yearsOfExperience: [0, [Validators.required, Validators.max(80), Validators.pattern(/^\d{1,2}$/)]]
    });
  }

  onSubmit() {

    if (this.addItemForm.valid) {
      this.item.age = this.addItemForm.get('age').value;
      this.item.email = this.addItemForm.get('email').value;
      this.item.fName = this.addItemForm.get('firstName').value;
      this.item.lName = this.addItemForm.get('lastName').value;
      this.item.gender = this.addItemForm.get('gender').value;
      this.item.isFullTime = this.addItemForm.get('fullTime').value;
      this.item.yearsOfExperience = this.addItemForm.get('yearsOfExperience').value;
      this.customerService.addCustomer(this.item);
      this.clear();
      this.goBack();
    } else {
      this.ms.addMessage('The form is invalid!');
    }
  }

  goBack(): void {
    this.location.back();
  }

  clear(): void {
    this.item.age = 0;
    this.item.email = '';
    this.item.fName = '';
    this.item.lName = '';
    this.item.gender = '';
    this.item.isFullTime = false;
    this.item.yearsOfExperience = 0;
  }

}
