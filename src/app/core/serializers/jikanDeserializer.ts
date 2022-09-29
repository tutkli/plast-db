import { JikanData, JikanResponse } from '../models/jikan/jikan.model';
import { Anime } from '../models/anime/anime.model';
import { Genre } from '../models/genre/genre.model';

export class JikanDeserializer {
  static deserializeAnimes = (input: JikanResponse): Anime[] => {
    return input.data.map((animeData: JikanData): Anime => animeData as unknown as Anime);
  };

  static deserializeGenres = (input: JikanResponse): Genre[] => {
    return input.data.map((animeData: JikanData): Genre => animeData as unknown as Genre);
  };
}
