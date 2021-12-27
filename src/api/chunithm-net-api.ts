import { fetchSongRecordDifficultyMapping } from '../constant/level-string';
import store from '../store';
import request from './request';

export async function fetchProfile() {
  return (await request.get<string>('https://chunithm-net-eng.com/mobile/home'))
    .data;
}

export async function fetchPlayRecord() {
  return (
    await request.get<string>(
      'https://chunithm-net-eng.com/mobile/record/playlog/'
    )
  ).data;
}

export async function fetchSongRecord(difficulty: ChunithmDifficulty) {
  const body = new URLSearchParams();
  body.append(
    'token',
    store.getState().credential.chunithmNet?._t?.value ?? ''
  );
  body.append('genre', '99');

  return (
    await request.post<string>(
      `https://chunithm-net-eng.com/mobile/record/musicGenre/send${fetchSongRecordDifficultyMapping[difficulty]}`,
      body.toString()
    )
  ).data;
}
