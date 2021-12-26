import CookieManager from '@react-native-cookies/cookies';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-native';
import tw from 'twrnc';
import {
  setAimeCredential,
  setChunithmNetCredential,
} from '../store/slice/credential-slice';
import { showSnackBar } from '../store/slice/ui-slice';
import type { AimeCookie, ChunithmNetCookie } from '../types/cookies';

async function getAimeCredentials(): Promise<AimeCookie> {
  const cookie = await CookieManager.get(
    'https://lng-tgk-aime-gw.am-all.net/',
    true
  );
  return {
    JSESSIONID: cookie.JSESSIONID,
  };
}

async function getChunithmNetCredentials(): Promise<ChunithmNetCookie> {
  const cookie = await CookieManager.get('https://chunithm-net-eng.com/', true);
  return {
    _t: cookie._t,
    userId: cookie.userId,
  };
}

const Login = () => {
  const webView = useRef<WebView>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SafeAreaView style={tw`flex-1`}>
      <>
        <WebView
          ref={webView}
          source={{
            uri: 'https://lng-tgk-aime-gw.am-all.net/common_auth/login?site_id=chuniex&redirect_url=https://chunithm-net-eng.com/mobile/&back_url=https://chunithm.sega.com/',
          }}
          onLoadEnd={async (e) => {
            if (e.nativeEvent.url.startsWith('https://chunithm-net-eng.com/')) {
              const aimeCookie = await getAimeCredentials();
              const chunithmNetCookie = await getChunithmNetCredentials();

              if (!aimeCookie.JSESSIONID?.value) {
                dispatch(showSnackBar('UNABLE_TO_LOAD_AIME_CREDENTIAL'));
                navigate('/');
                return;
              }

              if (
                !chunithmNetCookie._t?.value ||
                !chunithmNetCookie.userId?.value
              ) {
                dispatch(
                  showSnackBar('UNABLE_TO_LOAD_CHUNITHM_NET_CREDENTIAL')
                );
                navigate('/');
                return;
              }

              dispatch(setAimeCredential(aimeCookie));
              dispatch(setChunithmNetCredential(chunithmNetCookie));

              navigate('/');
            }
          }}
        />
      </>
    </SafeAreaView>
  );
};
export default Login;
