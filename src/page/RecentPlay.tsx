import CookieManager from '@react-native-cookies/cookies';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Button, DataTable, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-native';
import tw from 'twrnc';
import {fetchPlayRecord} from '../api/chunithm-net-api';
import {parsePlayRecord} from '../parser/chunithm-net-parser';
import {RootState} from '../store/index';

async function fetchRecentData(_t: string, userId: string) {
  await CookieManager.clearAll();
  return parsePlayRecord(await fetchPlayRecord(_t, userId));
}
const RecentPlay = () => {
  const [recentData, setRecentData] = useState<ChunithmPlayRecord[]>([]);
  const credential = useSelector(
    (store: RootState) => store.credential.chunithmNet,
  );

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Button
        onPress={() => {
          fetchRecentData(
            credential?._t.value ?? '',
            credential?.userId.value ?? '',
          )
            .then(data => {
              console.log(data);
              setRecentData(data);
            })
            .catch(e => {
              console.error(e);
            });
        }}>
        <Text>Fetch</Text>
      </Button>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <View style={tw`w-[120px]`}>
              <DataTable.Title>Title</DataTable.Title>
            </View>
            <DataTable.Title>Difficulty</DataTable.Title>
            <DataTable.Title>Score</DataTable.Title>
            <View style={tw`w-[20%]`}>
              <DataTable.Title>Play Time</DataTable.Title>
            </View>
          </DataTable.Header>

          {recentData.map(d => (
            <DataTable.Row key={`${d.date}`}>
              {/* <DataTable.Cell style={tw`text-wrap`}>{d.title}</DataTable.Cell> */}
              <View style={tw`w-[120px] justify-center pr-2`}>
                <Text>{d.title}</Text>
              </View>
              <DataTable.Cell>{d.difficulty}</DataTable.Cell>
              <DataTable.Cell>{d.score}</DataTable.Cell>
              <View style={tw`w-[20%]`}>
                <Text>{d.date}</Text>
              </View>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RecentPlay;
