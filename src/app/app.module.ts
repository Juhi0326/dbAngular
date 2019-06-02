import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CustomerService } from './customers/customer.service';
import { AddItemComponent } from './customers/add-item/add-item.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './users/login/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AddItemComponent,
    CustomerDetailsComponent,
    NavBarComponent,
    PageNotFoundComponent,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule,
    CustomersModule,
    UsersModule,
    AppRoutingModule

  ],
  providers: [CustomerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
