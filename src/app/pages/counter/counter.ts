import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
 title = 'Contador con Signals';

  counter = signal(10);

  variation(value: number) {
    this.counter.update(v => v + value);
  }

  reset() {
    this.counter.set(10);
  }
}
