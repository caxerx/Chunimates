import React from 'react';
import { Dialog, Portal, Text } from 'react-native-paper';

const DataFetchingDialog = () => {
  return (
    <Portal>
      <Dialog visible={true}>
        <Dialog.ScrollArea>
          <Text>Hello</Text>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

export default DataFetchingDialog;
