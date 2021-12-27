export const fetchSongRecordDifficultyMapping: Record<
  ChunithmDifficulty,
  string
> = {
  BAS: 'Basic',
  ADV: 'Advanced',
  EXP: 'Expert',
  MAS: 'Master',
  ULT: 'Ultima',
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
};
