import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent{
  @Input() ob1j = { name: 'Marian' };
  @Input() ob2j = { name: 'Marian' };
}
