import { Routes } from '@angular/router';
import { AnimeListComponent } from '../../anime-list/anime-list.component';
import { AnimeDetailComponent } from '../../anime-detail/anime-detail.component';

export enum AnimeRouteName {
  ANIME = 'anime',
  LIST = 'list',
  DETAIL = ':anime_id',
}

export const ANIME_ROUTES: Routes = [
  { path: '', redirectTo: AnimeRouteName.LIST, pathMatch: 'full' },
  { path: AnimeRouteName.LIST, component: AnimeListComponent, title: 'PLAST DB | List' },
  { path: AnimeRouteName.DETAIL, component: AnimeDetailComponent, title: 'PLAST DB | Detail' },
];
