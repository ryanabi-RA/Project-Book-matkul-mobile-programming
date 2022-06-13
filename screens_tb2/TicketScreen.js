import React from 'react';
import { Appbar } from 'react-native-paper';


import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActiveScreen from './ActiveScreen';
import WaitingScreen from './WaitingScreen';
const TopTab =createMaterialTopTabNavigator();

function TicketScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Tiket" color="white"/>
      </Appbar.Header>
      <TopTab.Navigator
      
      activeColor="white"
      tabBarOptions={{
          style: { backgroundColor: 'blue' },
          indicatorStyle: {
              backgroundColor: 'white',
              height: 5,
          },
          labelStyle: { color: 'white', fontWeight: '600', }
      }}
      >
        <TopTab.Screen name='Aktif' component={ActiveScreen}/>
        <TopTab.Screen name='Menunggu' component={WaitingScreen}/>
      </TopTab.Navigator>
    </>
  );
}

export default TicketScreen;