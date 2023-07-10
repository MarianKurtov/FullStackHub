import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterComponent {
  clickMe = 'Click me!';
  hideMe = 'Hide me!';
  changer = false;
  users: IUser[] | null = null;
  header = 'Register Component';
  header2 = 'Full Stack Hub';
  header3 = 'Prepare for interview in the best way!';
  loading = 'Loading...';
  usersArray = [
    {
      firstName: 'Marian',
      lastName: 'Kurtov',
      age: 29
    },
    {
      firstName: 'Ivan',
      lastName: 'Kurtov',
      age: 31
    }
  ];

  //Ако искаме да вземем нещо от parent компонентата
  @Input() defaultValue = 'Insert your name here!';
  //Emitting event when it's happen
  @Output() btnClickEmitter = new EventEmitter();

  constructor(userService: UserService) {
    userService.loadUsers().subscribe(u => {
      this.users = u;
    })
  }

  clickBtnHandler(value: any): void {
    console.log(value.value)
    this.btnClickEmitter.emit({ value });
  }

  keyboardInput(event: KeyboardEvent): void {
    this.header = (event.target as HTMLInputElement).value;
  }

  changeVisibility(): void {
    this.changer = !this.changer;
  }
}
