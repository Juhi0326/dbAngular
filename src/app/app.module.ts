import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { CustomerService } from './customers/customer.service';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule

  ],
  providers: [CustomerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
