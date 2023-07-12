import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogin(){
    return this.userService.isLogged;
  }

  name = 'Marian'

  constructor(public userService: UserService) {
  }

  logInHandler() {
    this.userService.logIn();
  }

  logOutHandler() {
    this.userService.logOut();
  }
}
