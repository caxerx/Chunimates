import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import tw from 'twrnc';

interface SongRecordTableProps {
  songRecord: ChunithmRatingTableSongRecord[];
}

const SongRecordTable = ({ songRecord }: SongRecordTableProps) => {
  const { t } = useTranslation();
  return (
    <DataTable>
      <DataTable.Header>
        <View style={tw`w-[30px] mr-1`}>
          <DataTable.Title>#</DataTable.Title>
        </View>
        <View style={tw`flex-1 mr-1`}>
          <DataTable.Title>{t('SONG_RECORD_TABLE.SONG_TITLE')}</DataTable.Title>
        </View>
        <View style={tw`w-[35px] mr-1`}>
          <DataTable.Title>{t('SONG_RECORD_TABLE.DIFFICULTY')}</DataTable.Title>
        </View>
        <View style={tw`w-[35px] mr-1`}>
          <DataTable.Title>{t('SONG_RECORD_TABLE.CONSTANT')}</DataTable.Title>
        </View>
        <View style={tw`w-[72px] mr-1`}>
          <DataTable.Title>{t('SONG_RECORD_TABLE.SCORE')}</DataTable.Title>
        </View>
        <View style={tw`w-[40px]`}>
          <DataTable.Title>{t('SONG_RECORD_TABLE.RATING')}</DataTable.Title>
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
