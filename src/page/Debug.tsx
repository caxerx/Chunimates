import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native';
import tw from 'twrnc';
import { RootState } from '../store/index';

const Debug = () => {
  const navigate = useNavigate();
  const credential = useSelector((store: RootState) => store.credential);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1`}>
        <Button
          onPress={() => {
            navigate('/');
          }}>
          <Text>Back to home</Text>
        </Button>
        <Text>Aime JSESSIONID: {credential.aime?.JSESSIONID?.value}</Text>
        <Text>ChunithmNet _t: {credential.chunithmNet?._t?.value}</Text>
        <Text style={tw`mb-4`}>
          ChunithmNet userId: {credential.chunithmNet?.userId?.value}
        </Text>
        <Text style={tw`mb-4`}>AimeRaw: {JSON.stringify(credential.aime)}</Text>
        <Text>ChunithmNetRaw: {JSON.stringify(credential.chunithmNet)}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Debug;
