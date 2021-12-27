import request from './request';

export async function fetchSongData() {
  const resp = await request.get<ChunirecSong[]>(
    'https://api.chunirec.net/2.0/music/showall.json?region=jp&token=715b13e2758e657e0bdd6c1b57e12ed886d41031b94b5852bcc2a6ae5760460b1e936a909c64022f8dd3b8b2084afe112836a7ff85de55d3b785e4caa62cd3ce'
  );
  return resp.data;
}
