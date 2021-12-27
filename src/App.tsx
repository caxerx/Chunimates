import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import merge from 'deepmerge';
import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { QueryClientProvider } from 'react-query';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import GlobalSnackBar from './component/home/global-snack-bar';
import Debug from './page/Debug';
import Home from './page/Home';
import Login from './page/Login';
import RecentPlay from './page/RecentPlay';
import SongRecord from './page/SongRecord';
import i18n from './service/i18n';
import Stack from './service/navigator-stack';
import store, { RootState } from './store';
import queryClient from './store/query-client';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const NavigationRoutes = () => {
  const { t } = useTranslation();
  const initDone = useSelector((state: RootState) => state.ui.initDone);

  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Home"
        options={{ title: 'Chunimates', headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: t('SCREEN_TITLE.LOGIN') }}
      />
      <Stack.Screen
        name="RecentPlay"
        component={RecentPlay}
        options={{ title: t('SCREEN_TITLE.RECENT_PLAY') }}
      />
      <Stack.Screen
        name="SongRecord"
        component={SongRecord}
        options={{ title: t('SCREEN_TITLE.SONG_RECORD') }}
      />
      <Stack.Screen
        name="Debug"
        component={Debug}
        options={{ title: t('SCREEN_TITLE.DEBUG') }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const colorSchema = useColorScheme();
  const theme =
    colorSchema === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <StoreProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <PaperProvider theme={theme}>
              <NavigationRoutes />
              <GlobalSnackBar />
            </PaperProvider>
          </I18nextProvider>
        </QueryClientProvider>
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
