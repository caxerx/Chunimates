import BigNumber from 'bignumber.js';
import React from 'react';
import { Image, View } from 'react-native';
import { Caption, Card, Subheading, Text, Title } from 'react-native-paper';
import { useQuery } from 'react-query';
import tw from 'twrnc';
import { fetchSongData } from '../../api/chunirec';
import { calculateRating } from '../../utils/rating';
import DifficultyBadge from '../common/difficulty-badge';

interface RecentPlayRecordCardProps {
  record: ChunithmNetPlayRecord;
}

const RecentPlayRecordCard = ({ record }: RecentPlayRecordCardProps) => {
  const query = useQuery('chunirec-song-data', fetchSongData);

  if (!query.data) {
    return <></>;
  }

  const song = query.data.find((i) => i.meta.title === record.title);

  if (!song) {
    return <></>;
  }
  const rating = calculateRating(
    new BigNumber(+record.score),
    new BigNumber(song.data[record.difficulty].const)
  ).toFixed(2);

  return (
    <Card style={tw`p-2`}>
      <View style={tw`bg-black items-center justify-center mb-2`}>
        <Text style={tw`text-white`}>{record.date}</Text>
      </View>
      <View style={tw`flex-row`}>
        <View style={tw`flex-shrink-0`}>
          <Image
            style={tw`w-28 h-28`}
            source={{
              uri: `https://db.chunirec.net/img/music/jkt/${song.meta.id}.jpg`,
            }}
          />
        </View>

        <View style={tw`flex-col flex-1 ml-2`}>
          <View style={tw`flex-row items-center`}>
            <Title style={tw`flex-1`}>Track {record.track}</Title>
            <DifficultyBadge
              difficulty={record.difficulty}
              constant={song.data[record.difficulty].const}
            />
          </View>

          <Subheading>{record.title}</Subheading>
          <View style={tw`flex-row items-center mb-2`}>
            <Caption style={tw`flex-1`}>{song.meta.genre}</Caption>
          </View>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`flex-1`}>
              {record.score} ({rating})
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default RecentPlayRecordCard;
