import { Routes } from '@angular/router';
import { AnimeRouteName } from './anime-routes.const';

export enum AppRouteName {
  HOME = 'home',
}

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: AppRouteName.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRouteName.HOME,
    loadComponent: () => import('src/app/home/home.component').then((mod) => mod.HomeComponent),
    title: 'PLAST DB | Home',
  },
  {
    path: AnimeRouteName.ANIME,
    loadChildren: () => import('src/app/core/const/anime-routes.const').then((mod) => mod.ANIME_ROUTES),
  },
];
