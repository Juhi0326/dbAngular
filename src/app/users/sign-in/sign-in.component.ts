import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './../../shared/messages/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  userName: string;
  password: string;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        userPassword: ['', Validators.required]
      }
    );

  }

  signIn(): void {
    if (this.signInForm.valid) {
      this.userName = this.signInForm.get('userName').value;
      this.password = this.signInForm.get('userPassword').value;
      this.authService.signIn(this.userName, this.password);
    } else {
      this.messageService.addMessage('The form is invalid!');
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    }
  }

  signInWithGoogle(): void {
    this.authService.googleAuth();
  }

}

