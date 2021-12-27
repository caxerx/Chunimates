import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import tw from 'twrnc';

interface ProfileCardProps {
  name: string;
  level: string;
  reborn: string;
  rating: string;
  maxRating: string;
  title: string;
  titleType: string;
  avatar: string;
}

const ProfileCard = ({ profileCard }: { profileCard: ProfileCardProps }) => {
  return (
    <Card style={tw`m-4 p-2`}>
      <View style={tw`flex-row`}>
        <Image
          style={tw`h-[86px] w-[86px]`}
          source={{
            uri: `https://chunithm-net-eng.com/mobile/img/${profileCard.avatar}.png`,
          }}
        />
        <View style={tw`flex-col flex-1 ml-4`}>
          <ImageBackground
            resizeMode="stretch"
            style={tw`w-full p-1 justify-center`}
            source={{
              uri: `https://chunithm-net-eng.com/mobile/images/honor_bg_${profileCard.titleType}.png`,
            }}>
            <Text style={tw`text-center text-black`}>{profileCard.title}</Text>
          </ImageBackground>
          {profileCard.reborn && (
            <View style={tw`flex-col`}>
              <ImageBackground
                style={tw`items-center justify-center h-[24px] w-[25px]`}
                source={{
                  uri: 'https://chunithm-net-eng.com/mobile/images/icon_reborn_star.png',
                }}>
                <Text style={tw`text-black`}>{profileCard.reborn}</Text>
              </ImageBackground>
            </View>
          )}
          <View style={tw`flex-row`}>
            <Text style={tw`mr-4`}>Lv.{profileCard.level}</Text>
            <Text>{profileCard.name}</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text>
              RATING : {profileCard.rating} / (MAX {profileCard.maxRating})
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ProfileCard;
