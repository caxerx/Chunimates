import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';
import GlobalSnackBar from './component/home/global-snack-bar';
import Debug from './page/Debug';
import Home from './page/Home';
import Login from './page/Login';
import RecentPlay from './page/RecentPlay';
import SongRecord from './page/SongRecord';
import store from './store';
import queryClient from './store/query-client';

// const styles = StyleSheet.create({
//   reborn: {
//     height: 24,
//     width: 25,
//   },
//   iconImage: {
//     height: 86,
//     width: 86,
//   },
// });

// const HomeScreen = () => (
//   <SafeAreaView style={tw`flex-col flex-1`}>
//     <Layout level="4" style={tw`flex-1`}>
//       <ScrollView>
//         <Card appearance="filled" style={tw`m-4`}>
//           <Layout style={tw`flex-row`}>
//             <Image
//               style={styles.iconImage}
//               source={{
//                 uri: 'https://chunithm-net-eng.com/mobile/img/463558b989d8c93f.png',
//               }}
//             />
//             <Layout style={tw`flex-col flex-1 ml-4`}>
//               <ImageBackground
//                 style={tw`w-full h-5`}
//                 source={{
//                   uri: 'https://chunithm-net-eng.com/mobile/images/honor_bg_normal.png',
//                 }}>
//                 <Text style={tw`text-center text-black`}>NEW COMER</Text>
//               </ImageBackground>
//               <Layout style={tw`flex-col`}>
//                 <ImageBackground
//                   style={{...styles.reborn, ...tw`items-center justify-center`}}
//                   source={{
//                     uri: 'https://chunithm-net-eng.com/mobile/images/icon_reborn_star.png',
//                   }}>
//                   <Text style={tw`text-black`}>1</Text>
//                 </ImageBackground>
//               </Layout>
//               <Layout style={tw`flex-row`}>
//                 <Text style={tw`mr-4`}>Lv.17</Text>
//                 <Text>ＣＨＯＣＯＩＦＹ</Text>
//               </Layout>
//               <Layout style={tw`flex-row`}>
//                 <Text>RATING : 14.46 / (MAX 14.46)</Text>
//               </Layout>
//             </Layout>
//           </Layout>
//         </Card>
//       </ScrollView>
//     </Layout>
//   </SafeAreaView>
// );

const App = () => {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NativeRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/recent-play" element={<RecentPlay />} />
              <Route path="/song-record" element={<SongRecord />} />
              <Route path="/debug" element={<Debug />} />
            </Routes>
          </NativeRouter>
          <GlobalSnackBar />
        </PaperProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default App;
