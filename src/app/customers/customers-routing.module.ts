import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthGuard } from '../auth.guard';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'new-customer', component: AddItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

