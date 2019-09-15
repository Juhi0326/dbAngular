import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerService } from './../customer.service';
import { CustModell } from './../cust-modell';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth.service';
import { MessageService } from './../../shared/messages/message.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  editItemForm: FormGroup;
  customerDetails: CustModell;
  editState = false;
  itemToEdit: CustModell;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { customer: CustModell }) => {
      this.customerDetails = data.customer;
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.GetCustomerById(id)
      .subscribe(res => this.customerDetails = res);
    this.editItemForm = this.formBuilder.group(
      {
        firstName: [`${this.customerDetails.fName}`, [Validators.required, Validators.minLength(3), Validators.maxLength(40),
        Validators.pattern(/^[a-zA-ZáéíóöőüúűÁÉÍÓÖŐÚŰ]+$/)]],
        lastName: [`${this.customerDetails.lName}`, [Validators.required, Validators.minLength(2), Validators.maxLength(40),
        Validators.pattern(/^[a-zA-ZáéíóöőüúűÁÉÍÓÖŐÚŰ]+$/)]],
        age: [`${this.customerDetails.age}`, [Validators.required, Validators.min(18), Validators.max(120),
        Validators.pattern(/^\d{1,3}$/)]],
        email: [`${this.customerDetails.email}`, [Validators.required, Validators.email]],
        gender: [`${this.customerDetails.gender}`, [Validators.required]],
        fullTime: [`${this.customerDetails.isFullTime}`],
        yearsOfExperience: [`${this.customerDetails.yearsOfExperience}`, [Validators.required, Validators.max(80),
        Validators.pattern(/^\d{1,2}$/)]]
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/customers`],
      { queryParamsHandling: 'preserve' });
  }

  deleteItem(item: CustModell): void {
    item = this.getItem();
    this.customerService.deleteCustomer(item);
    this.clearState();
    this.goBack();
  }
  editItem(item: CustModell): void {
    item = this.getItem();
    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: CustModell): void {
    if (this.editItemForm.valid) {
      item = this.getItem();
      this.customerService.updateCustomer(item);
      this.clearState();
    } else {
      this.messageService.addMessage('The form is invalid!');
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    }

  }

  clearState(): void {
    this.editState = false;
    this.itemToEdit = null;
  }
  getItem() {
    this.customerDetails.age = this.editItemForm.get('age').value;
    this.customerDetails.email = this.editItemForm.get('email').value;
    this.customerDetails.fName = this.editItemForm.get('firstName').value;
    this.customerDetails.lName = this.editItemForm.get('lastName').value;
    this.customerDetails.gender = this.editItemForm.get('gender').value;
    this.customerDetails.isFullTime = this.editItemForm.get('fullTime').value;
    this.customerDetails.yearsOfExperience = this.editItemForm.get('yearsOfExperience').value;
    this.customerDetails.uid = JSON.stringify(this.authService.userData.uid);
    return this.customerDetails;
  }
}
