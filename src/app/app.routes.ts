import { Home } from '@/pages/home/home';
import { NotFound } from '@/pages/not-found/not-found';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: '**',
    component: NotFound,
  },
];
