import { Routes } from '@angular/router';

export enum AnimeRouteName {
  ANIME = 'anime',
  LIST = 'list',
  DETAIL = ':anime_id',
}

export const ANIME_ROUTES: Routes = [
  { path: '', redirectTo: AnimeRouteName.LIST, pathMatch: 'full' },
  {
    path: AnimeRouteName.LIST,
    loadComponent: () => import('src/app/views/anime-list/anime-list.component').then((mod) => mod.AnimeListComponent),
    title: 'PLAST DB | List',
  },
  {
    path: AnimeRouteName.DETAIL,
    loadComponent: () => import('src/app/views/anime-detail/anime-detail.component'),
    title: 'PLAST DB | Detail',
  },
];
