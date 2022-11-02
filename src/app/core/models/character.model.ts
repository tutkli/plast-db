import { AnimeImages } from './anime/anime.model';

export interface AnimeCharacter {
  character: Person;
  role: string;
  voice_actors: VoiceActor;
}

export interface VoiceActor {
  person: Person;
  language: string;
}

export interface Person {
  mal_id: number;
  url: string;
  images: AnimeImages;
  name: string;
}
