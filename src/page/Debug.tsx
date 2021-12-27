import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { fetchSongData } from '../api/chunirec';
import { RootState } from '../store/index';

const Debug = () => {
  const credential = useSelector((store: RootState) => store.credential);
  const query = useQuery('chunirec-song-data', fetchSongData);
  const { i18n } = useTranslation();

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView style={tw`flex-1`}>
        <Text>Aime JSESSIONID: {credential.aime?.JSESSIONID?.value}</Text>
        <Text>ChunithmNet _t: {credential.chunithmNet?._t?.value}</Text>
        <Text style={tw`mb-4`}>
          ChunithmNet userId: {credential.chunithmNet?.userId?.value}
        </Text>
        <Text style={tw`mb-4`}>AimeRaw: {JSON.stringify(credential.aime)}</Text>
        <Text>ChunithmNetRaw: {JSON.stringify(credential.chunithmNet)}</Text>
        <Text>Language: {i18n.language}</Text>
      </ScrollView>

      <FlatList
        style={tw`flex-1`}
        data={query.data}
        renderItem={(i) => <Text>{JSON.stringify(i)}</Text>}
        keyExtractor={(item) => item.meta.id}
      />
    </SafeAreaView>
  );
};
export default Debug;
