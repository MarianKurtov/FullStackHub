import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  counter = 0;
  intervalSubscription: Subscription;

  constructor() {
    this.intervalSubscription = interval(1000).subscribe(() => { // @ts-ignore
      this.counter++; });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
