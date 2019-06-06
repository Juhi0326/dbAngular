import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CutomersMainLayerComponent } from './cutomers-main-layer/cutomers-main-layer.component';

@NgModule({
  declarations: [CutomersMainLayerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
