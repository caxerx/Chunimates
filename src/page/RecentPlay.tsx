import CookieManager from '@react-native-cookies/cookies';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { fetchPlayRecord } from '../api/chunithm-net-api';
import RecentPlayTable from '../component/recent-play/recent-play-table';
import { parsePlayRecord } from '../parser/chunithm-net-parser';
import { RootState } from '../store/index';

async function fetchRecentData(_t: string, userId: string) {
  await CookieManager.clearAll();
  return parsePlayRecord(await fetchPlayRecord(_t, userId));
}
const RecentPlay = () => {
  const [recentData, setRecentData] = useState<ChunithmPlayRecord[]>([]);
  const credential = useSelector(
    (store: RootState) => store.credential.chunithmNet
  );

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View>
        <Button
          onPress={() => {
            fetchRecentData(
              credential?._t?.value ?? '',
              credential?.userId?.value ?? ''
            )
              .then((data) => {
                console.log(data);
                setRecentData(data);
              })
              .catch((e) => console.error(e));
          }}>
          <Text>Fetch</Text>
        </Button>

        <Button
          onPress={() => {
            import('../data/play-record.json')
              .then((data) => {
                setRecentData(data.default);
              })
              .catch((e) => console.error(e));
          }}>
          <Text>Use Sample Data</Text>
        </Button>
      </View>

      <ScrollView>
        {/* <ScrollView horizontal={true} directionalLockEnabled={false}>
          <View style={tw`w-[500px]`}> */}
        <RecentPlayTable playRecord={recentData} />
        {/* </View>
        </ScrollView> */}
      </ScrollView>

      {/* <RecentPlayRecordCard /> */}
    </SafeAreaView>
  );
};
export default RecentPlay;
