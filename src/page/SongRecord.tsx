import BigNumber from 'bignumber.js';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { fetchSongData } from '../api/chunirec';
import { fetchSongRecord } from '../api/chunithm-net-api';
import SongRecordTable from '../component/song-record/song-record-table';
import { parseSongRecord } from '../parser/chunithm-net-parser';
import log from '../service/log';
import { showSnackBar } from '../store/slice/ui-slice';
import { calculateRating } from '../utils/rating';

const SongRecord = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const query = useQuery('chunirec-song-data', fetchSongData);

  const [netSongRecord, setNetSongRecord] = useState<{
    BAS: ChunithmNetSongRecord[];
    ADV: ChunithmNetSongRecord[];
    EXP: ChunithmNetSongRecord[];
    MAS: ChunithmNetSongRecord[];
    ULT: ChunithmNetSongRecord[];
    WE: ChunithmNetSongRecord[];
  }>({ BAS: [], ADV: [], EXP: [], MAS: [], ULT: [], WE: [] });

  const [tableSongRecord, setTableSongRecord] = useState<
    ChunithmRatingTableSongRecord[]
  >([]);

  useEffect(() => {
    const difficulties = Object.keys(netSongRecord);
    const tableData = difficulties
      .map((i: string) =>
        netSongRecord[i as ChunithmDifficulty].filter((j) => j.score !== '')
      )
      .flatMap((diff, index) =>
        diff.map((song) => {
          const chunirecSong = query.data?.find(
            (j) => song.title === j.meta.title
          );
          const constant =
            chunirecSong?.data[difficulties[index] as ChunithmDifficulty].const;
          return {
            title: song.title,
            score: song.score,
            difficulty: difficulties[index],
            constant: constant?.toFixed(1),
            rating: calculateRating(
              new BigNumber(+song.score),
              new BigNumber(constant ?? 0)
            ).toFixed(2),
          } as ChunithmRatingTableSongRecord;
        })
      )
      .sort((s1, s2) => +s2.rating - +s1.rating);
    setTableSongRecord(tableData);
  }, [netSongRecord, query.data]);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-row`}>
        <Button
          onPress={async () => {
            try {
              const MAS = await fetchSongRecord('MAS').then((i) =>
                parseSongRecord(i)
              );

              const EXP = await fetchSongRecord('EXP').then((i) =>
                parseSongRecord(i)
              );

              const ADV = await fetchSongRecord('ADV').then((i) =>
                parseSongRecord(i)
              );

              const BAS = await fetchSongRecord('BAS').then((i) =>
                parseSongRecord(i)
              );

              setNetSongRecord({ MAS, EXP, ADV, BAS, ULT: [], WE: [] });
            } catch (e) {
              dispatch(showSnackBar(t('SNACK_BAR.UNABLE_TO_LOAD_RECORDS')));
              log.error(e);
            }
          }}>
          <Text>{t('BUTTON.FETCH_DATA')}</Text>
        </Button>
      </View>

      <ScrollView>
        <SongRecordTable songRecord={tableSongRecord} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SongRecord;
