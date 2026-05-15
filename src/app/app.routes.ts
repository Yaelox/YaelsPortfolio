import { Routes } from '@angular/router';

import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { PortfolioItem } from './pages/portfolio-item/portfolio-item';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Portafolio },
  { path: 'about', component: About },
  { path: 'item', component: PortfolioItem },

  { path: '**', redirectTo: 'home' }
];