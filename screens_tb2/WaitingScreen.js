import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import NotFoundScreen from './NotFoundScreen';
import supabase from '../supabase';

function WaitingScreen({ navigation }) {
  return (
    <View>
      <NotFoundScreen />
    </View>
  );
}

export default WaitingScreen;
