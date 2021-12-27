import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useQuery } from 'react-query';
import tw from 'twrnc';
import ProfileCard from '../component/home/profile-card';
import { fetchAndParseProfile } from '../query/chunithm-net';
import { ChunimatesParamList } from '../service/navigator-stack';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ChunimatesParamList>>();

  const { t } = useTranslation();

  const profileQuery = useQuery('chunithm-net-profile', fetchAndParseProfile);

  return (
    <SafeAreaView style={tw`flex-1`}>
      {profileQuery.data && <ProfileCard profileCard={profileQuery.data} />}

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
