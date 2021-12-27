import { createAction, createSlice } from '@reduxjs/toolkit';

interface UIState {
  initDone: boolean;
  snackbar: {
    message?: string;
    isVisible: boolean;
  };
}
const initialState = {
  initDone: false,
  snackbar: {
    isVisible: false,
  },
} as UIState;

export const showSnackBar = createAction<string>('ui/showSnackBar');

export const dismissSnackBar = createAction('ui/dismissSnackBar');

export const setInitDone = createAction('ui/setInitDone');

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(showSnackBar, (state, action) => {
      state.snackbar.message = action.payload;
      state.snackbar.isVisible = true;
    });

    builder.addCase(dismissSnackBar, (state) => {
      state.snackbar.message = undefined;
      state.snackbar.isVisible = false;
    });

    builder.addCase(setInitDone, (state) => {
      state.initDone = true;
    });
  },
});

export default uiSlice.reducer;
