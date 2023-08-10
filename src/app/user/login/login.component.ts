import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hasFormError: any;
  showEmailError: any;
  showPasswordError: any;

  constructor(
      private userService: UserService,
      private router: Router
  ) { }

  submitFormHandler(value: any) {

  }

}
