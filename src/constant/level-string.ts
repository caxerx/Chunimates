export const fetchSongRecordDifficultyMapping: Record<
  ChunithmDifficulty,
  string
> = {
  BAS: 'Basic',
  ADV: 'Advanced',
  EXP: 'Expert',
  MAS: 'Master',
  ULT: 'Ultima',
  WE: "World's End",
};

export const fetchPlayRecordDifficultyMapping: Record<
  string,
  ChunithmDifficulty
> = {
  basic: 'BAS',
  advanced: 'ADV',
  expert: 'EXP',
  master: 'MAS',
  ultima: 'ULT',
  worldsend: 'WE',
};
