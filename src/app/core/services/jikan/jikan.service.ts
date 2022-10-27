import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Anime } from '../../models/anime/anime.model';
import { HttpService } from '../http/http.service';
import { JikanMapper } from '@mappers/jikan-mapper';
import { Pairs } from '../../models/http/http.model';

@Injectable({
  providedIn: 'root',
})
export class JikanService {
  private readonly JIKAN_API = 'https://api.jikan.moe/v4';

  constructor(private httpService: HttpService) {}

  getTopAnimes(params: Pairs = { filter: 'airing' }): Observable<Anime[]> {
    return this.httpService
      .serverRequest('GET', `${this.JIKAN_API}/top/anime`, { params })
      .pipe(map(JikanMapper.deserializeAnimes));
  }
}
