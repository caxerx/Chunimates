type ChunithmDifficulty = 'BAS' | 'ADV' | 'EXP' | 'MAS' | 'ULT';

interface ChunithmNetPlayRecord {
  title: string;
  date: string;
  score: string;
  track: string;
  difficulty: ChunithmDifficulty;
}

interface ChunithmNetSongRecord {
  title: string;
  score: string;
  isClear: boolean;
  isFullCombo: boolean;
  isAllJustice: boolean;
}

interface ChunithmRatingTableSongRecord {
  title: string;
  score: string;
  difficulty: string;
  constant: string;
  rating: string;
}

interface ChunirecSongDataLevel {
  level: number;
  const: number;
  maxcombo: number;
  is_const_unknown: boolean;
}

type ChunirecSongData = {
  [i in ChunithmDifficulty]: ChunirecSongDataLevel;
};

interface ChunirecSongMeta {
  id: string;
  title: string;
  genre: string;
  artist: string;
  release: string;
  bpm: number;
}

interface ChunirecSong {
  meta: ChunirecSongMeta;
  data: ChunirecSongData;
}
