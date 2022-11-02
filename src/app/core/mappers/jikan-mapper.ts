import { JikanData, JikanResponse } from '../models/jikan/jikan.model';
import { Anime } from '../models/anime/anime.model';
import { AnimeCharacter } from '../models/character.model';

export class JikanMapper {
  static deserializeAnime = (input: JikanResponse): Anime => {
    return input.data as unknown as Anime;
  };

  static deserializeAnimes = (input: JikanResponse): Anime[] => {
    return input.data.map((animeData: JikanData): Anime => animeData as unknown as Anime);
  };

  static deserializeCharacters = (input: JikanResponse): AnimeCharacter[] => {
    return input.data.map((animeData: JikanData): AnimeCharacter => animeData as unknown as AnimeCharacter);
  };
}
