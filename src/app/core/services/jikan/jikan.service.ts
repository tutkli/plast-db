import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Anime } from '../../models/anime/anime.model';
import { HttpService } from '../http/http.service';
import { JikanDeserializer } from '../../serializers/jikanDeserializer';
import { Genre } from '../../models/genre/genre.model';

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  private readonly JIKAN_API = 'https://api.jikan.moe/v4';

  constructor(private httpService: HttpService) {}

  getTopAnimes(): Observable<Anime[]> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/top/anime`, {})
      .pipe(map(JikanDeserializer.deserializeAnimes));
  }

  getAnimeGenres(): Observable<Genre[]> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/genres/anime`, {})
      .pipe(map(JikanDeserializer.deserializeGenres));
  }
}
