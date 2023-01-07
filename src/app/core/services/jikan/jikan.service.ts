import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import {
  Anime,
  AnimeCharacter,
  AnimeSearchParams,
  JikanClient,
  JikanResponse,
  Manga,
  TopAnimeFilter,
  TopMangaFilter,
} from '@tutkli/jikan-ts';

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  private readonly jikanClient = new JikanClient();

  getTopAnimes(): Observable<Anime[]> {
    return from(this.jikanClient.top.getTopAnime({ filter: TopAnimeFilter.airing })).pipe(
      map((jikanResponse: JikanResponse<Anime[]>) => jikanResponse.data)
    );
  }

  getTopMangas(): Observable<Manga[]> {
    return from(this.jikanClient.top.getTopManga({ filter: TopMangaFilter.publishing })).pipe(
      map((jikanResponse: JikanResponse<Manga[]>) => jikanResponse.data)
    );
  }

  getAnimeSearch(searchParams?: AnimeSearchParams): Observable<Anime[]> {
    return from(this.jikanClient.anime.getAnimeSearch(searchParams)).pipe(
      map((jikanResponse: JikanResponse<Anime[]>) => jikanResponse.data)
    );
  }

  getAnimeDetail(malId: number): Observable<Anime> {
    return from(this.jikanClient.anime.getAnimeById(malId)).pipe(
      map((jikanResponse: JikanResponse<Anime>) => jikanResponse.data)
    );
  }

  getAnimeCharacters(malId: number): Observable<AnimeCharacter[]> {
    return from(this.jikanClient.anime.getAnimeCharacters(malId)).pipe(
      map((jikanResponse: JikanResponse<AnimeCharacter[]>) => jikanResponse.data)
    );
  }
}
