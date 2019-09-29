import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './core/home.component';

const routes: Routes = [
  {path: '' , component: HomeComponent },
  { path: 'customers',
  canActivate: [AuthGuard],
   loadChildren: './customers/customers.module#CustomersModule'},
   {path: 'login', loadChildren: './users/users.module#UsersModule'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],

exports: [ RouterModule ]
})
export class AppRoutingModule { }
