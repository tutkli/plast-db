import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { Anime, JikanResponse, Manga, TopAnimeFilter, TopClient, TopMangaFilter } from '@tutkli/jikan-ts';

@Injectable({ providedIn: 'root' })
export class TopService {
  private readonly topClient = new TopClient();

  getTopAnimes(): Observable<Anime[]> {
    return from(this.topClient.getTopAnime({ filter: TopAnimeFilter.airing })).pipe(
      map((jikanResponse: JikanResponse<Anime[]>) => jikanResponse.data)
    );
  }

  getTopMangas(): Observable<Manga[]> {
    return from(this.topClient.getTopManga({ filter: TopMangaFilter.publishing })).pipe(
      map((jikanResponse: JikanResponse<Manga[]>) => jikanResponse.data)
    );
  }
}
