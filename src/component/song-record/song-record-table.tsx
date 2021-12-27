import React from 'react';
import { View } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import tw from 'twrnc';

interface SongRecordTableProps {
  songRecord: ChunithmRatingTableSongRecord[];
}

const SongRecordTable = ({ songRecord }: SongRecordTableProps) => {
  return (
    <DataTable>
      <DataTable.Header>
        <View style={tw`w-[30px] mr-1`}>
          <DataTable.Title>#</DataTable.Title>
        </View>
        <View style={tw`flex-1 mr-1`}>
          <DataTable.Title>Title</DataTable.Title>
        </View>
        <View style={tw`w-[35px] mr-1`}>
          <DataTable.Title>Diff</DataTable.Title>
        </View>
        <View style={tw`w-[35px] mr-1`}>
          <DataTable.Title>Const</DataTable.Title>
        </View>
        <View style={tw`w-[72px] mr-1`}>
          <DataTable.Title>Score</DataTable.Title>
        </View>
        <View style={tw`w-[40px]`}>
          <DataTable.Title>Rating</DataTable.Title>
        </View>
      </DataTable.Header>

      {songRecord.map((d, i) => (
        <DataTable.Row key={`${d.title}-${d.difficulty}`}>
          <View style={tw`w-[30px] mr-1 justify-center`}>
            <Text>{i}</Text>
          </View>
          <View style={tw`flex-1 mr-1 justify-center`}>
            <Text>{d.title}</Text>
          </View>
          <View style={tw`w-[35px] mr-1 justify-center`}>
            <Text>{d.difficulty}</Text>
          </View>
          <View style={tw`w-[35px] mr-1 justify-center`}>
            <Text>{d.constant}</Text>
          </View>
          <View style={tw`w-[72px] mr-1 justify-center`}>
            <Text>{d.score}</Text>
          </View>
          <View style={tw`w-[40px] justify-center`}>
            <Text>{d.rating}</Text>
          </View>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default SongRecordTable;
