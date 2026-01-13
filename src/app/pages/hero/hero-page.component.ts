import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal<string>('Ironman');
  age = signal<number>(45);

  nameUpper = computed(() => this.name().toUpperCase());

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(): void {
    this.age.set(60);
  }
}
