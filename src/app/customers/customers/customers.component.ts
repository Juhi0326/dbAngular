import { Component, OnInit } from '@angular/core';
import { CustModell } from './../cust-modell';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from './../customer.service';
import { AuthService } from './../../auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title = 'Customers';
  items$: Observable<CustModell[]>;
  searchText: string;
  editState = false;
  itemToEdit: CustModell;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private authservice: AuthService,
    private location: Location) { }

  ngOnInit() {
    this.searchText = this.route.snapshot.queryParamMap.get('filterBy') || '';

    this.items$ = this.customerService.getCustomers();
  }

  goBack(): void {
    this.location.back();
  }

  navigate(id: string) {
    this.router.navigate([`customers/customer-details/${id}`],
      {
        queryParams: { filterBy: this.searchText }
      }
    );
  }

/*   refresh() {
    this.customerService.getCustomers().subscribe(items => {
      this.items = items.filter(item => item.uid === JSON.stringify(this.authservice.userData.uid));
    });
  } */
}
