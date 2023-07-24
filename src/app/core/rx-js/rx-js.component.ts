import { Component } from '@angular/core';
import { fromEvent, interval, map } from 'rxjs';

//create observable that emits click events
const source = fromEvent(document, 'keyup');

//map to string with given event timestamp
const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));

//output (example): 'Event time: 7276.390000000001'
const subscribe = example.subscribe(val => console.log(val));

//Create time logger with rxJS
// interval(1000).pipe(map(() => new Date())).subscribe(console.log);

//Create clock with rxJS
const clock = document.getElementById('clock');

interval(1000)
  .pipe(map(() => new Date()))
  .subscribe(date => {
    let h = date.getHours();
    let m = date.getMinutes()
    let s = date.getSeconds();
    const time = `${h}:${m}:${s}`;
    // console.log(time)
  });

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})

export class RxJSComponent {
}
