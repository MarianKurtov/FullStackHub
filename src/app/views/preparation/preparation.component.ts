import { Component, OnInit } from '@angular/core';
import { filter, Observable} from 'rxjs';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent implements OnInit{

  clock: any;
  seeClock = false;
  isHighLighted = false;
  users = [ { name: 'Marian', age: 29 }, { name: 'Ivan', age: 31 } ];

  myObservable = new Observable((observable)=>{
    setTimeout(()=>{observable.next(2)}, 1000);
    setTimeout(()=>{observable.next(3)}, 2000);
    setTimeout(()=>{observable.next(Math.random())}, 3000);
    setTimeout(()=>{observable.next(Math.random())}, 4000);
    setTimeout(()=>{observable.next(Math.random())}, 5000);
    // setTimeout(()=>{observable.error(new Error('Something went wrong!'))}, 5000);
    setTimeout(()=>{observable.next(Math.random())}, 6000);
  })

  highlighted(): void {
    this.isHighLighted = !this.isHighLighted;
  }

  ngOnInit(): void {
    // Interview
    // myObservable = new Observable((observable) => {
    //   setTimeout(() => {observable.next('1')}, 1000);
    //   setTimeout(() => {observable.next('2')}, 2000);
    //   setTimeout(() => {observable.next('3')}, 3000);
    //   setTimeout(() => {observable.error(new Error("This user already exist!"))}, 4000);
    //   setTimeout(() => {observable.next(Math.random()*100 )}, 5000);
    //   });
    // this.myObservable.subscribe((value) => {
    //   console.log(value)
    // }, (error) => {
    //   alert(error.message)
    // });

    //fromEvent -> console log
    // const nameInput = document.getElementById("name-input");
    // // @ts-ignore
    //  const clickStream = fromEvent(nameInput, 'keyup');
    //
    //  clickStream.pipe(
    //    map(e => e.target)
    //  ).subscribe(console.log)

    // Clock
    // const clock = document.getElementById("clock");
    //
    // interval(1000).pipe(
    //   map(() => new Date)
    //   ).subscribe(
    //   date => {
    //     const h = date.getHours();
    //     const m = date.getMinutes();
    //     const s = date.getSeconds();
    //     this.clock = `${h}:${m}:${s}`;
    //   }
    // )

    // const users$ = from(this.users).subscribe(console.log);

    // this.myObservable.pipe(filter(num => num % 2));
    this.myObservable.subscribe(console.log);
  }
}
