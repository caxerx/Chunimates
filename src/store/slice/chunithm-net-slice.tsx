import { createSlice } from '@reduxjs/toolkit';

interface ChunithmNetState {
  recentPlayRecord: ChunithmNetPlayRecord[];
}
const initialState = { recentPlayRecord: [] } as ChunithmNetState;

const chunithmNetSlice = createSlice({
  name: 'chunithmNet',
  initialState,
  reducers: {},
  extraReducers: (_builder) => {
    //
  },
});

export default chunithmNetSlice.reducer;
