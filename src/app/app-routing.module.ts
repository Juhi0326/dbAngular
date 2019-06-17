import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '' , component: HomeComponent },
  { path: 'customers',
  canActivate: [AuthGuard],
   loadChildren: './customers/customers.module#CustomersModule'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],

exports: [ RouterModule ]
})
export class AppRoutingModule { }
