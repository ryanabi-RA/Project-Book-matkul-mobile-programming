import React from 'react';
import { Appbar } from 'react-native-paper';

function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" color='white' />
      </Appbar.Header>
    </>
  );
}

export default HomeScreen;