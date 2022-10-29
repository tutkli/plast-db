import { Routes } from '@angular/router';
import { ANIME_ROUTES, AnimeRouteName } from './anime-routes.const';
import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';

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
    component: HomeComponent,
    title: 'PLAST DB | Home',
  },
  {
    path: AppRouteName.ABOUT,
    component: AboutComponent,
    title: 'PLAST DB | About',
  },
  {
    path: AnimeRouteName.ANIME,
    children: ANIME_ROUTES,
  },
];
