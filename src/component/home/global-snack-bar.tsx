import React from 'react';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { dismissSnackBar } from '../../store/slice/ui-slice';

const GlobalSnackBar = () => {
  const snackbar = useSelector((store: RootState) => store.ui.snackbar);
  const dispatch = useDispatch();

  function dismiss() {
    dispatch(dismissSnackBar());
  }

  return (
    <Snackbar duration={3000} onDismiss={dismiss} visible={snackbar.isVisible}>
      {snackbar.message ?? ''}
    </Snackbar>
  );
};

export default GlobalSnackBar;
