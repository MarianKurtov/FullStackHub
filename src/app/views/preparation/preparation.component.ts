import {Component, Input, OnInit} from '@angular/core';
import {filter, from, interval, map, Observable} from 'rxjs';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent implements OnInit {

  clock: any;
  seeClock = false;
  isHighLighted = false;
  users = [{ name: 'Marian', age: 29 }, { name: 'Ivan', age: 31 }];

  myObservable = new Observable(( observable ) => {
    setTimeout(() => { observable.next( { name: 'Marian', age: 26 } )}, 1000);
    setTimeout(() => { observable.next( { name: 'asd', age: 27 } )}, 2000);
    setTimeout(() => { observable.next( { name: 'das', age: 28 } )}, 3000);
    setTimeout(() => { observable.next( { name: 'asdasda', age: 29 } )}, 4000);
    setTimeout(() => { observable.next( { name: 'adssds', age: 20 } )}, 5000);
    setTimeout(() => { observable.next( { name: 'asds', age: 22 } )}, 6000);
  });

  values = [
    {
      name: "John",
      age: 30
    },
    {
      name: "alex",
      age: 40
    }
  ];

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
    const clock = document.getElementById("clock");

    interval(1000).pipe(
      map(() => new Date)
      ).subscribe(
      date => {
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        this.clock = `${h}:${m}:${s}`;
      }
    )

    // const users$ = from(this.users).subscribe(console.log);

    // this.myObservable.pipe(
    //   filter(val => {
    //     return val.age > 30;
    //   })
    // ).subscribe(val => console.log(val));
    //
    // from(this.values)
    //   .pipe(filter(val => {
    //       return val.age > 30;
    //     })
    //   )
    //   .subscribe(val => console.log(val));
    //
    // const numbers = from([1, 2, 3, 4, 5]);
    //
    // numbers.pipe(
    //   filter(num => num % 2 === 0), // Filter even numbers
    //   map(num => num * 2) // Double each number
    // ).subscribe(result => console.log(`Result: ${result}`));
    //



    this.myObservable.pipe(
      filter((value) => {
        // @ts-ignore
        return value % 2 === 0
      })
    ).subscribe(console.log)












  }
}
