import {configureStore} from '@reduxjs/toolkit';
import credentialSlice from './slice/credential-slice';

const store = configureStore({
  reducer: {
    credential: credentialSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
