import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersComponent } from './../../customers/customers/customers.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

goToCustomers(e: Event) {
  e.preventDefault();
  this.router.navigate(['customers']);
}
}
