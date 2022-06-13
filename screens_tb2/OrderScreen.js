import React from 'react';
import { Appbar } from 'react-native-paper';

function OrderScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Order" color='white' />
      </Appbar.Header>
    </>
  );
}

export default OrderScreen;