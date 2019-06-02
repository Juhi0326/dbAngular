import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './users/login/login.component';


const routes: Routes = [

  { path: '',  redirectTo: 'customers', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],


exports: [ RouterModule ]
})
export class AppRoutingModule { }
