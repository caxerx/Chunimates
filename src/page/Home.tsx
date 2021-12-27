import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import tw from 'twrnc';
import ProfileCard from '../component/home/profile-card';
import { ChunimatesParamList } from '../service/navigator-stack';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ChunimatesParamList>>();

  const { t } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ProfileCard
        profileCard={{
          name: 'CHOCOIFY',
          reborn: '1',
          avatar: '463558b989d8c93f',
          level: '20',
          rating: '14.43',
          maxRating: '14.46',
          title: 'NEW COMER',
          titleType: 'normal',
        }}
      />

      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text>{t('SCREEN_TITLE.LOGIN')}</Text>
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('RecentPlay');
        }}>
        <Text>{t('SCREEN_TITLE.RECENT_PLAY')}</Text>
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('SongRecord');
        }}>
        <Text>{t('SCREEN_TITLE.SONG_RECORD')}</Text>
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('Debug');
        }}>
        <Text>{t('SCREEN_TITLE.DEBUG')}</Text>
      </Button>
    </SafeAreaView>
  );
};
export default Home;
