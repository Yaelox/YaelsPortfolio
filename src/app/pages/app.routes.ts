import { Routes } from '@angular/router';

import { Portafolio } from './portafolio/portafolio';
import { About } from './about/about';
import { PortfolioItem } from './portfolio-item/portfolio-item';

export const routes: Routes = [
  { path: '', component: Portafolio },
  { path: 'about', component: About },
  { path: 'item', component: PortfolioItem },
  { path: '**', redirectTo: '' }
];