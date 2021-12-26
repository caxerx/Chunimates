import { configureStore } from '@reduxjs/toolkit';
import credentialSlice from './slice/credential-slice';
import uiSlice from './slice/ui-slice';

const store = configureStore({
  reducer: {
    credential: credentialSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
