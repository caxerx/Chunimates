import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Card, Layout, Text} from '@ui-kitten/components';
import tw from 'twrnc';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Login from './Login';

const styles = StyleSheet.create({
  reborn: {
    height: 24,
    width: 25,
  },
  iconImage: {
    height: 86,
    width: 86,
  },
});

const HomeScreen = () => (
  <SafeAreaView style={tw`flex-col flex-1`}>
    <Layout level="4" style={tw`flex-1`}>
      <ScrollView>
        <Card appearance="filled" style={tw`m-4`}>
          <Layout style={tw`flex-row`}>
            <Image
              style={styles.iconImage}
              source={{
                uri: 'https://chunithm-net-eng.com/mobile/img/463558b989d8c93f.png',
              }}
            />
            <Layout style={tw`flex-col flex-1 ml-4`}>
              <ImageBackground
                style={tw`w-full h-5`}
                source={{
                  uri: 'https://chunithm-net-eng.com/mobile/images/honor_bg_normal.png',
                }}>
                <Text style={tw`text-center text-black`}>NEW COMER</Text>
              </ImageBackground>
              <Layout style={tw`flex-col`}>
                <ImageBackground
                  style={{...styles.reborn, ...tw`items-center justify-center`}}
                  source={{
                    uri: 'https://chunithm-net-eng.com/mobile/images/icon_reborn_star.png',
                  }}>
                  <Text style={tw`text-black`}>1</Text>
                </ImageBackground>
              </Layout>
              <Layout style={tw`flex-row`}>
                <Text style={tw`mr-4`}>Lv.17</Text>
                <Text>ＣＨＯＣＯＩＦＹ</Text>
              </Layout>
              <Layout style={tw`flex-row`}>
                <Text>RATING : 14.46 / (MAX 14.46)</Text>
              </Layout>
            </Layout>
          </Layout>
        </Card>
      </ScrollView>
    </Layout>
  </SafeAreaView>
);

const App = () => {
  const colorSchema = useColorScheme();
  return (
    <ApplicationProvider
      {...eva}
      theme={colorSchema === 'light' ? eva.light : eva.dark}>
      {/* <HomeScreen /> */}
      <Login />
    </ApplicationProvider>
  );
};

export default App;
