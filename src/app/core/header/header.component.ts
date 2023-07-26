import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name = 'Marian'

  get isLogin(){
    return this.userService.isLogged;
  }

  constructor(public userService: UserService) {
  }

  logInHandler() {
    this.userService.logIn();
  }

  logOutHandler() {
    this.userService.logOut();
  }
}
