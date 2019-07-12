import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CutomersMainLayerComponent } from './cutomers-main-layer/cutomers-main-layer.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CutomersMainLayerComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomersRoutingModule,
    Ng2SearchPipeModule,
  ]
})
export class CustomersModule { }
