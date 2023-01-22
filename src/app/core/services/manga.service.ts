import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { CommonCharacter, JikanResponse, Manga, MangaClient, MangaSearchParams } from '@tutkli/jikan-ts';

@Injectable({ providedIn: 'root' })
export class MangaService {
  private readonly mangaClient = new MangaClient();

  getMangaSearch(searchParams?: MangaSearchParams): Promise<JikanResponse<Manga[]>> {
    const params = { ...searchParams, limit: 20 };
    return this.mangaClient.getMangaSearch(params);
  }

  getMangaDetail(malId: number): Observable<Manga> {
    return from(this.mangaClient.getMangaById(malId)).pipe(
      map((jikanResponse: JikanResponse<Manga>) => jikanResponse.data)
    );
  }

  getMangaCharacters(malId: number): Observable<CommonCharacter[]> {
    return from(this.mangaClient.getMangaCharacters(malId)).pipe(
      map((jikanResponse: JikanResponse<CommonCharacter[]>) => jikanResponse.data)
    );
  }
}
