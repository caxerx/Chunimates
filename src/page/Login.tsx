import CookieManager from '@react-native-cookies/cookies';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-native';
import tw from 'twrnc';
import {
  setAimeCredential,
  setChunithmNetCredential,
} from '../store/slice/credential-slice';
import type {AimeCookie, ChunithmNetCookie} from '../types/cookies';

async function getAimeCredentials(): Promise<AimeCookie> {
  const cookie = await CookieManager.get(
    'https://lng-tgk-aime-gw.am-all.net/',
    true,
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
          onLoadEnd={async e => {
            if (
              e.nativeEvent.url === 'https://chunithm-net-eng.com/mobile/home/'
            ) {
              const aimeCookie = await getAimeCredentials();
              if (!aimeCookie.JSESSIONID.value) {
                console.error('failed to get aime cookie');
              }

              dispatch(setAimeCredential(aimeCookie));
              dispatch(
                setChunithmNetCredential(await getChunithmNetCredentials()),
              );
              navigate('/');
            }
          }}
        />
      </>
    </SafeAreaView>
  );
};
export default Login;
