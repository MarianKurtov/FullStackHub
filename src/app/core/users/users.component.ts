import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: IUser[] | null = null;
  loading = 'Loading...';

  constructor(userService: UserService) {
    // userService.loadUsers().subscribe(u => {
    //   this.users = u;
    // })
  }
}
