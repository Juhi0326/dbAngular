import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthGuard } from '../auth.guard';
import { AddItemComponent } from './add-item/add-item.component';
import { CustomerResolverService} from './customer-resolver.service';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard],
    children: [
      { path: '', component: CustomersComponent },
      { path: 'customer-details/:id',
      component: CustomerDetailsComponent,
      resolve: { customer: CustomerResolverService}
     },
      { path: 'new-customer', component: AddItemComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CustomersRoutingModule { }

