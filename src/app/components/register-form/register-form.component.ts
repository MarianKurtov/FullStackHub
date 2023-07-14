import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterComponent {
  public users: IUser[] | null = null;
  header = 'Register Component';
  loading = 'Loading...';

  //Ако искаме да вземем нещо от parent компонентата
  @Input() defaultValue = 'Insert your name here!';
  //Emitting event when it's happen
  @Output() btnClickEmitter = new EventEmitter();
  name = "Marian";

  constructor(userService: UserService) {
    userService.loadUsers().subscribe(u => {
      this.users = u;
    })
  }
}
