interface Anime {
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
  season: 'spring' | 'summer' | 'fall' | 'winter';
  year: number;
  broadcast: AnimeBroadcast;
  producers: AnimeProducer[];
  licensors: AnimeLicensor[];
  studio: AnimeStudio[];
  genres: AnimeGenre[];
  explicit_genres: AnimeGenre[];
  themes: AnimeTheme[];
  demographic: AnimeDemographic[];
}

interface AnimeImages {
  jpg: AnimeImageCollection;
  webp: AnimeImageCollection;
}

interface AnimeImageCollection {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface AnimeTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

interface AnimeTitle {
  type: string;
  title: string;
}

interface AnimeAired {
  from: string;
  to: string;
  prop: {
    form: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
    string: string;
  };
}

interface AnimeBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface AnimeProducer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeLicensor {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeStudio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeTheme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeDemographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export {
  Anime,
  AnimeImages,
  AnimeImageCollection,
  AnimeTrailer,
  AnimeTitle,
  AnimeAired,
  AnimeBroadcast,
  AnimeProducer,
  AnimeLicensor,
  AnimeStudio,
  AnimeGenre,
  AnimeTheme,
  AnimeDemographic,
};
