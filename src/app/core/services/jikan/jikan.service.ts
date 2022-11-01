import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Anime } from '../../models/anime/anime.model';
import { HttpService } from '../http/http.service';
import { JikanMapper } from '@mappers/jikan-mapper';
import { Pairs } from '../../models/http/http.model';
import { AnimeCharacter } from '../../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  private readonly JIKAN_API = 'https://api.jikan.moe/v4';

  constructor(private httpService: HttpService) {}

  getTopAnimes(): Observable<Anime[]> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/top/anime`, { params: { filter: 'airing' } })
      .pipe(map(JikanMapper.deserializeAnimes));
  }

  getAnimeSearch(params: Pairs): Observable<Anime[]> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/anime`, { params })
      .pipe(map(JikanMapper.deserializeAnimes));
  }

  getAnimeDetail(malId: number): Observable<Anime> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/anime/${malId}`, {})
      .pipe(map(JikanMapper.deserializeAnime));
  }

  getAnimeCharacters(malId: number): Observable<AnimeCharacter[]> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/anime/${malId}/characters`, {})
      .pipe(map(JikanMapper.deserializeCharacters));
  }
}
