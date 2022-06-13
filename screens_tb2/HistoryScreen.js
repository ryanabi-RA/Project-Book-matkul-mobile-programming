import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import NotFoundScreen from './NotFoundScreen';
import supabase from '../supabase';

function HistoryScreen({ navigation }) {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Riwayat" color='white' />
      </Appbar.Header>
      <NotFoundScreen />
    </View>
  );
}

export default HistoryScreen;