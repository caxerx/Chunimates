import {createSlice} from '@reduxjs/toolkit';

interface ChunithmNetState {
  recentPlayRecord: any[];
}
const initialState = {recentPlayRecord: []} as ChunithmNetState;

const chunithmNetSlice = createSlice({
  name: 'chunithmNet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //
  },
});

export default chunithmNetSlice.reducer;
