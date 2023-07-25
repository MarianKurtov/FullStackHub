import { Component } from '@angular/core';
import {IUser} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public users: IUser[] | null = null;
  loading = 'Loading...';

  constructor(userService: UserService) {
    userService.loadUsers().subscribe(u => {
      this.users = u;
    })
  }
}
