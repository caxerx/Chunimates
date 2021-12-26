import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import tw from 'twrnc';

const Home = () => {
  const navigate = useNavigate();
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Button
        onPress={() => {
          navigate('/login');
        }}>
        <Text>LOGIN</Text>
      </Button>

      <Button
        onPress={() => {
          navigate('/recent-play');
        }}>
        <Text>RECENT_PLAY</Text>
      </Button>
      <Button
        onPress={() => {
          navigate('/debug');
        }}>
        <Text>DEBUG</Text>
      </Button>
    </SafeAreaView>
  );
};
export default Home;
