import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export interface ChunimatesParamList extends ParamListBase {
  Home: undefined;
  Login: undefined;
  RecentPlay: undefined;
  SongRecord: undefined;
  Debug: undefined;
}

const Stack = createNativeStackNavigator<ChunimatesParamList>();

export default Stack;
