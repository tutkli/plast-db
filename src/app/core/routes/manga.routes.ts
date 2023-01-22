import { Routes } from '@angular/router';

export enum MangaRouteName {
  MANGA = 'manga',
  LIST = 'list',
  DETAIL = ':manga_id',
}

export const MANGA_ROUTES: Routes = [
  { path: '', redirectTo: MangaRouteName.LIST, pathMatch: 'full' },
  {
    path: MangaRouteName.LIST,
    loadComponent: () => import('src/app/views/manga-list/manga-list.component'),
    title: 'PLAST DB | Manga',
  },
  {
    path: MangaRouteName.DETAIL,
    loadComponent: () => import('src/app/views/manga-detail/manga-detail.component'),
    title: 'PLAST DB | Detail',
  },
];
