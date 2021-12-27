import CookieManager from '@react-native-cookies/cookies';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { fetchPlayRecord } from '../api/chunithm-net-api';
import RecentPlayRecordCard from '../component/recent-play/recent-play-record-card';
import { parsePlayRecord } from '../parser/chunithm-net-parser';
import log from '../service/log';
import { RootState } from '../store/index';
import { showSnackBar } from '../store/slice/ui-slice';

async function fetchRecentData(_t: string) {
  await CookieManager.clearAll();
  return parsePlayRecord(await fetchPlayRecord());
}

const RecentPlay = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [recentData, setRecentData] = useState<ChunithmNetPlayRecord[]>([]);
  const credential = useSelector(
    (store: RootState) => store.credential.chunithmNet
  );

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-row`}>
        <Button
          onPress={async () => {
            try {
              const data = await fetchRecentData(credential?._t?.value ?? '');
              setRecentData(data);
            } catch (e) {
              dispatch(showSnackBar(t('SNACK_BAR.UNABLE_TO_LOAD_RECORDS')));
              log.error(e);
            }
          }}>
          <Text>{t('BUTTON.FETCH_DATA')}</Text>
        </Button>
      </View>
      <FlatList
        data={recentData}
        renderItem={(record) => (
          <>
            <View style={tw`p-2 flex-col`}>
              <RecentPlayRecordCard record={record.item} />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};
export default RecentPlay;
