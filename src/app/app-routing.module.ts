import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CustomersComponent } from './customers/customers/customers.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { AddItemComponent } from './customers/add-item/add-item.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '',  redirectTo: 'customers', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'new-customer', component: AddItemComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],


exports: [ RouterModule ]
})
export class AppRoutingModule { }
