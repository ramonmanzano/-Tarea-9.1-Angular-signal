import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Counter } from './pages/counter/counter';

export const routes: Routes = [
  { path: 'hero', component: HeroPageComponent },
  { path: '', component: Counter },

];
