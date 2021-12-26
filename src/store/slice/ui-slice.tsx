import { createAction, createSlice } from '@reduxjs/toolkit';

interface UIState {
  snackbar: {
    message?: string;
    isVisible: boolean;
  };
}
const initialState = {
  snackbar: {
    isVisible: false,
  },
} as UIState;

export const showSnackBar = createAction<string>('ui/showSnackBar');

export const dismissSnackBar = createAction('ui/dismissSnackBar ');

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
  },
});

export default uiSlice.reducer;
