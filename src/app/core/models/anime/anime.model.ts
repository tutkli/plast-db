export interface Anime {
  mal_id: string;
  url: string;
  images: AnimeImages;
  trailer: AnimeTrailer;
  approved: boolean;
  titles: AnimeTitle[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AnimeAired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: AnimeSeason;
  year: number;
  broadcast: AnimeBroadcast;
  producers: AnimeDataField[];
  licensors: AnimeDataField[];
  studio: AnimeDataField[];
  genres: AnimeDataField[];
  explicit_genres: AnimeDataField[];
  themes: AnimeDataField[];
  demographic: AnimeDataField[];
}

export interface AnimeImages {
  jpg: AnimeImageCollection;
  webp?: AnimeImageCollection;
}

export interface AnimeImageCollection {
  image_url: string;
  small_image_url?: string;
  large_image_url?: string;
}

export interface AnimeTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface AnimeTitle {
  type: string;
  title: string;
}

export interface AnimeAired {
  from: string;
  to: string;
  prop: {
    form: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
    string: string;
  };
}

export enum AnimeSeason {
  SPRING = 'spring',
  SUMMER = 'summer',
  FALL = 'fall',
  WINTER = 'winter',
}

export interface AnimeBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface AnimeDataField {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export enum AnimeFilter {
  AIRING = 'airing',
  UPCOMING = 'upcoming',
  BY_POPULARITY = 'bypopularity',
  FAVORITE = 'favorite',
}

export enum AnimeType {
  TV = 'tv',
  MOVIE = 'movie',
  OVA = 'ova',
  SPECIAL = 'special',
  ONA = 'ona',
  MUSIC = 'music',
}
