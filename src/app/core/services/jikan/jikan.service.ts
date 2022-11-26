import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import {
  Anime,
  AnimeCharacter,
  AnimeClient,
  AnimeSearchParams,
  JikanResponse,
  JikanUniqueResponse,
  TopAnimeFilter,
  TopClient,
} from '@tutkli/jikan-ts';

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  private readonly topClient = new TopClient({ loggerOptions: { enabled: true } });
  private readonly animeClient = new AnimeClient();

  getTopAnimes(): Observable<Anime[]> {
    return from(this.topClient.getTopAnime({ filter: TopAnimeFilter.airing })).pipe(
      map((jikanResponse: JikanResponse<Anime>) => jikanResponse.data)
    );
  }

  getAnimeSearch(searchParams?: AnimeSearchParams): Observable<Anime[]> {
    return from(this.animeClient.getAnimeSearch(searchParams)).pipe(
      map((jikanResponse: JikanResponse<Anime>) => jikanResponse.data)
    );
  }

  getAnimeDetail(malId: number): Observable<Anime> {
    return from(this.animeClient.getAnimeById(malId)).pipe(
      map((jikanResponse: JikanUniqueResponse<Anime>) => jikanResponse.data)
    );
  }

  getAnimeCharacters(malId: number): Observable<AnimeCharacter[]> {
    return from(this.animeClient.getAnimeCharacters(malId)).pipe(
      map((jikanResponse: JikanResponse<AnimeCharacter>) => jikanResponse.data)
    );
  }
}
