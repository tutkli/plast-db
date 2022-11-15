import { Routes } from '@angular/router';
import { AnimeRouteName } from './anime-routes.const';

export enum AppRouteName {
  HOME = 'home',
  ABOUT = 'about',
}

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: AppRouteName.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRouteName.HOME,
    loadComponent: () => import('src/app/views/home/home.component').then((mod) => mod.HomeComponent),
    title: 'PLAST DB | Home',
  },
  {
    path: AppRouteName.ABOUT,
    loadComponent: () => import('src/app/views/about/about.component').then((mod) => mod.AboutComponent),
    title: 'PLAST DB | About',
  },
  {
    path: AnimeRouteName.ANIME,
    loadChildren: () => import('src/app/core/routes/anime-routes.const').then((mod) => mod.ANIME_ROUTES),
  },
];
