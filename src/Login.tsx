import CookieManager, {Cookies} from '@react-native-community/cookies';
import {Button, Text} from '@ui-kitten/components';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import tw from 'twrnc';

const Login = () => {
  const webView = useRef<WebView>(null);
  const [savedCookie, setSavedCookie] = useState<Cookies>({});
  const [savedCookieAime, setSavedCookieAime] = useState<Cookies>({});
  const [handleLoadEnd, setHandleLoadEnd] = useState<{func: () => void}>({
    func: () => {
      return;
    },
  });
  return (
    <SafeAreaView style={tw`flex-1`}>
      <>
        <Button
          onPress={async () => {
            await CookieManager.clearAll(true);
            console.log('DONE');
          }}>
          <Text>Clean Cookie</Text>
        </Button>
        <Button
          onPress={async () => {
            const cookie = await CookieManager.get(
              'https://chunithm-net-eng.com',
              true,
            );
            setSavedCookie(cookie);
            console.log('CHUNI:', cookie);

            const cookie2 = await CookieManager.get(
              'https://lng-tgk-aime-gw.am-all.net',
              true,
            );
            setSavedCookieAime(cookie2);
            console.log('AIME:', cookie2);
          }}>
          <Text>Save Cookie</Text>
        </Button>
        <Button
          onPress={async () => {
            await CookieManager.clearAll(true);
            Object.keys(savedCookie).forEach(i => {
              const domain = savedCookie[i].domain;
              if (!domain) {
                return;
              }
              CookieManager.set(
                'https://chunithm-net-eng.com',
                savedCookie[i],
                true,
              )
                .then(e => {
                  console.log('set cookie:', i, savedCookie[i], e);
                })
                .catch(e => {
                  console.log('set cookie:', i, savedCookie[i], e);
                });
            });

            Object.keys(savedCookieAime).forEach(i => {
              const domain = savedCookieAime[i].domain;
              if (!domain) {
                return;
              }
              CookieManager.set(
                'https://lng-tgk-aime-gw.am-all.net',
                savedCookieAime[i],
                true,
              )
                .then(e => {
                  console.log('set cookie:', i, savedCookieAime[i], e);
                })
                .catch(e => {
                  console.log('set cookie:', i, savedCookieAime[i], e);
                });
            });
          }}>
          <Text>Set Saved Cookie</Text>
        </Button>
        <Button
          onPress={() => {
            webView.current?.injectJavaScript(
              'location.href="https://chunithm-net-eng.com/"',
            );
          }}>
          <Text>Go Chunithm</Text>
        </Button>
        <Button
          onPress={() => {
            setHandleLoadEnd({
              func: () => {
                webView.current?.injectJavaScript(
                  'document.getElementsByClassName("btn_master")[0].click()',
                );
              },
            });
            webView.current?.injectJavaScript(
              'location.href="https://chunithm-net-eng.com/mobile/record/musicGenre"',
            );

            //   webView.current?.injectJavaScript(
            //     'window.ReactNativeWebView.postMessage(document.body.innerHTML)',
            //   );
          }}>
          <Text>Fetch</Text>
        </Button>
        <WebView
          ref={webView}
          source={{uri: 'https://chunithm-net-eng.com/'}}
          onMessage={e => {
            console.log('msg:', e.nativeEvent.data);
          }}
          onLoadEnd={() => {
            handleLoadEnd.func();
          }}
        />
      </>
    </SafeAreaView>
  );
};
export default Login;
