import CookieManager from '@react-native-cookies/cookies';
import Axios from 'axios';
import store from '../store';

const request = Axios.create();
request.interceptors.request.use(async (req) => {
  if ((req.url ?? '').startsWith('https://chunithm-net-eng.com/')) {
    await CookieManager.clearAll();
    const chunithmCookie = store.getState().credential.chunithmNet;
    if (chunithmCookie?._t) {
      await CookieManager.set(
        'https://chunithm-net-eng.com',
        chunithmCookie?._t
      );
    }
    if (chunithmCookie?.userId) {
      await CookieManager.set(
        'https://chunithm-net-eng.com',
        chunithmCookie?.userId
      );
    }
  }

  return req;
});

request.interceptors.response.use((resp) => {
  if (resp.config.url?.startsWith('https://chunithm-net-eng.com/mobile/')) {
    const data = resp.data as string;
    if (
      data.includes(
        `location.href="https://lng-tgk-aime-gw.am-all.net/common_auth/login?site_id=chuniex&redirect_url=https://chunithm-net-eng.com/mobile/&back_url=https://chunithm.sega.com/";`
      )
    ) {
      return Promise.reject(['Login Required', resp]);
    }

    if (
      data.includes(`<h2 id="page_title">Error</h2>`) ||
      data.includes('Error Code: ')
    ) {
      return Promise.reject(['Session Invalidate', resp]);
    }
  }
  return resp;
});

export default request;
