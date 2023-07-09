import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  header = 'Register Component';
  header2 = 'Full Stack Hub';
  header3 = 'Prepare for interview in the best way!';

  //Ако искаме да вземем нещо от parent компонентата
  @Input() defaultValue = 'Insert your name here!';

  //Emitting event when it's happen
  @Output() btnClickEmitter = new EventEmitter();

  clickBtnHandler(value: any): void {
    console.log(value)
    this.btnClickEmitter.emit({ value });
  }

  clickMe = 'Click me!';
  hideMe = 'Hide me!';
  changer = false;

  users = [
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

  keyboardInput(event: KeyboardEvent): void {
    this.header = (event.target as HTMLInputElement).value;
  }

  changeVisibility(): void {
    this.changer = !this.changer;
  }
}
