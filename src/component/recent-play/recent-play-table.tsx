import React from 'react';
import { View } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import tw from 'twrnc';

interface RecentPlayTableProps {
  playRecord: ChunithmPlayRecord[];
}

const RecentPlayTable = ({ playRecord }: RecentPlayTableProps) => {
  return (
    <DataTable>
      <DataTable.Header>
        <View style={tw`flex-3 pr-2`}>
          <DataTable.Title>Title</DataTable.Title>
        </View>
        <View style={tw`w-[40px]`}>
          <DataTable.Title>Diff</DataTable.Title>
        </View>
        <View style={tw`w-[75px]`}>
          <DataTable.Title>Score</DataTable.Title>
        </View>
        <View style={tw`flex-2`}>
          <DataTable.Title>Play Time</DataTable.Title>
        </View>
      </DataTable.Header>

      {playRecord.map((d) => (
        <DataTable.Row key={`${d.date}`}>
          <View style={tw`flex-3 justify-center pr-2`}>
            <Text>{d.title}</Text>
          </View>
          <View style={tw`w-[40px] justify-center pr-2`}>
            <Text>{`${d.difficulty}`.substring(0, 3).toUpperCase()}</Text>
          </View>
          <View style={tw`w-[75px] justify-center pr-2`}>
            <DataTable.Cell>{d.score}</DataTable.Cell>
          </View>
          <View style={tw`flex-2 justify-center`}>
            <Text>{d.date}</Text>
          </View>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default RecentPlayTable;
