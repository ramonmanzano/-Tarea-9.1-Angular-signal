import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class App {
  title = 'Contador con Signals';

  counter = signal(10);

  variation(value: number) {
    this.counter.update(v => v + value);
  }

  reset() {
    this.counter.set(10);
  }
}
