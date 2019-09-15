import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './../../shared/messages/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  userName: string;
  password: string;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        userName: ['', [Validators.required, Validators.email]],
        userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      }
    );

  }

  signUp(): void {
    if (this.signUpForm.valid) {
    this.userName = this.signUpForm.get('userName').value;
    this.password = this.signUpForm.get('userPassword').value;
    this.authService.signUp(this.userName, this.password);
    } else {
      this.messageService.addMessage('The form is invalid!');
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    }
  }

  signInWithGoogle(): void {
    this.authService.googleAuth();
  }

}
