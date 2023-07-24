import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my-app';
  nameInputValue = 'Test Test';

  constructor() {
    setTimeout(()=> {this.nameInputValue = 'Changed!'}, 4000)
  }

  nameInputButtonClick($event: any) {
    console.log($event)
  }
}
