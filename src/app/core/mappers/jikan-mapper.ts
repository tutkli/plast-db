import { JikanData, JikanResponse } from '../models/jikan/jikan.model';
import { Anime } from '../models/anime/anime.model';

export class JikanMapper {
  static deserializeAnimes = (input: JikanResponse): Anime[] => {
    return input.data.map((animeData: JikanData): Anime => animeData as unknown as Anime);
  };
}
