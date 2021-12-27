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

export default request;
