import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './../../shared/messages/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  userName: string;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required, Validators.email]],
      }
    );
  }
  forgotPassword(): void {
    if (this.forgetPasswordForm.valid) {
    this.userName = this.forgetPasswordForm.get('userName').value;
    this.authService.forgotPassword(this.userName);
    } else {
      this.messageService.addMessage('The form is invalid!');
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    }
  }
}
