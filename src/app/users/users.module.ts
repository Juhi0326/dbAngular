import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
