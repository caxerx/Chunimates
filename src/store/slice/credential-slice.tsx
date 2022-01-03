import { createAction, createSlice } from '@reduxjs/toolkit';
import { AimeCookie, ChunithmNetCookie } from '../../types/cookies';

interface CredentialState {
  aime?: AimeCookie;
  chunithmNet?: ChunithmNetCookie;
}
const initialState = {} as CredentialState;

export const setAimeCredential = createAction<AimeCookie>(
  'credential/setAimeCredential'
);
export const setChunithmNetCredential = createAction<ChunithmNetCookie>(
  'credential/setChunithmNetCredential'
);

const credentialSlice = createSlice({
  name: 'credential',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAimeCredential, (state, action) => {
      state.aime = action.payload;
    });

    builder.addCase(setChunithmNetCredential, (state, action) => {
      state.chunithmNet = action.payload;
    });
  },
});

export default credentialSlice.reducer;
