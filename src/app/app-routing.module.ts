import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',  redirectTo: 'customers', pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'new-customer', component: AddItemComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],



exports: [ RouterModule ]
})
export class AppRoutingModule { }
