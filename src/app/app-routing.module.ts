import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],



exports: [ RouterModule ]
})
export class AppRoutingModule { }
