import { Component } from '@angular/core';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent {

  // This html at the bottom is only for training purpose and is not part of the real project
  // observableData = 0;
  // observableData1 = 0;
  //
  // subjectData = 0;
  // subjectData1 = 0;
  //
  // reactiveForm: FormGroup;
  //
  // constructor(private formBuilder: FormBuilder) {
  //
  //   this.reactiveForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  //
  // }
  // submitForm(): void {
  //   if (this.reactiveForm.valid) {
  //     console.log('Form submitted:', this.reactiveForm.value);
  //   } else {
  //     console.log('Form is invalid.');
  //   }
  //
  //   for(let i = 0; i< 5; i++){
  //
  //   }
  // }
  //
  // getObservableData() {
  //
  //   let myObservable = new Observable<any>((observable) => {
  //     observable.next(Math.floor(Math.random() * 99) + 1);
  //   });
  //
  //   myObservable.subscribe(value => {
  //     this.observableData = value
  //   })
  //
  //   myObservable.subscribe(value => {
  //     this.observableData1 = value
  //   })
  // }
  //
  // getSubjectData() {
  //
  //   let mySubject = new Subject<any>();
  //
  //   mySubject.subscribe((value) => {
  //     this.subjectData = value;
  //   });
  //
  //   mySubject.subscribe((value) => {
  //     this.subjectData1 = value;
  //   });
  //   mySubject.next(Math.floor((Math.random()) * 99) + 1);
  // }

}

































// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('btn');
//
//   // @ts-ignore
//   button.addEventListener('click', (event: MouseEvent) => {
//
//     const target = event.currentTarget as HTMLElement;
//
//     const counter = Number(target.innerText) + 1;
//
//     target.innerText = counter.toString();
//   })
// })

//   //BehaviorSubject
//   const subject = new BehaviorSubject('Initial Value');
//   const subscription = subject.subscribe((value) => {
//     console.log('Subscriber 1:', value);
//   });
//
//   subject.next('New Value');
//
//   const subscription2 = subject.subscribe((value) => {
//     console.log('Subscriber 2:', value);
//   });
//
//   subject.next('Йепааааа!');
//
//   const subscription3 = subject.subscribe((value) => {
//     console.log('Subscriber 3:', value);
//   });
// }

// celsius = 0;
// fahrenheit = 0;
// myInput = 'Insert your name!';
// isHighLighted = false;
// highlighted(): void {
//   this.isHighLighted = !this.isHighLighted;
// }
// clock: any;
// seeClock = false;
// users = [{ name: 'Marian', age: 29 }, { name: 'Ivan', age: 31 }];

// myObservable = new Observable(( observable ) => {
//   setTimeout(() => { observable.next( { name: 'Marian', age: 26 } )}, 1000);
//   setTimeout(() => { observable.next( { name: 'asd', age: 27 } )}, 2000);
//   setTimeout(() => { observable.next( { name: 'das', age: 28 } )}, 3000);
//   setTimeout(() => { observable.next( { name: 'asdasda', age: 29 } )}, 4000);
//   setTimeout(() => { observable.next( { name: 'adssds', age: 20 } )}, 5000);
//   setTimeout(() => { observable.next( { name: 'asds', age: 22 } )}, 6000);
// });
// values = [
//   {
//     name: "John",
//     age: 30
//   },
//   {
//     name: "alex",
//     age: 40
//   }
// ];

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
// @ts-ignore
// clickStream.pipe(
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

// const celsiusInput = document.getElementById("celsius");
// }
//
//
//   getChangeFah($event: any) {
//     const newF = (Number(this.celsius) * (9 / 5) + 32);
//     this.fahrenheit = newF;
//   }
//
//   getChangeCel($event: any) {
//     const newC = ((Number(this.fahrenheit) - 32) * (5/9));
//     this.celsius = newC;
//     // C = (F − 32) × 5/9
//   }
// cel = 0;
// far = 0;
//   // (°C) * 9/5) + 32.
//   // (°F) - 32) * 5/9.
//
// fromCellToFar($event: Event) {
//   // @ts-ignore
//   this.cel = Number($event.target.value);
//   this.far = Number(((this.cel * 9/5) + 32).toFixed(2));
// }
//
// fromFarToCel($event: Event) {
//   // @ts-ignore
//   this.far = Number($event.target.value);
//   this.cel = Number(((this.far - 32) * 5/9).toFixed(2));
// }

// myObservable1 = new Observable((observable) => {
//   setTimeout( () => observable.next(Math.random()), 1000);
//   setTimeout( () => observable.next(Math.random()), 2000);
//   setTimeout( () => observable.next(Math.random()), 3000);
//   setTimeout( () => observable.next(Math.random()), 4000);
//   setTimeout( () => observable.next(new Error('wtf')), 5000);
//
// });

// myObservable = new Observable( (observable) => {
//   setTimeout( () => observable.next(1001), 1000 );
//   setTimeout( () => observable.next(2002), 2000 );
//   setTimeout( () => observable.next(3001), 3000 );
//   setTimeout( () => observable.next(4002), 4000 );
//   setTimeout( () => observable.next(5001), 5000 );
// })

//onInit
// of(1,2,3,4,5,6,7,8,9,10)
//     .pipe(
//         filter(val => {
//           return val %2==0;
//         }),
//     ).subscribe(val => console.log(val));
//
// this.myObservable.pipe(
//     filter((value: any) => {
//       return value % 2 == 0;
//     })).subscribe(console.log);

