import React from 'react';
import { Appbar } from 'react-native-paper';


import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TopTab =createMaterialTopTabNavigator();

import ActiveScreen from './ActiveScreen';
import NonActiveScreen from './NonActiveScreen';
function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" color='white' />
      </Appbar.Header>
      <TopTab.Navigator
       activeColor="blue"
       tabBarOptions={{
         style:{backgroundColor:'#fff'},
         indicatorStyle:{
           backgroundColor:'blue',
           height:5,
         },
         labelStyle:{ color:'black'}        
       }}
      >
        <TopTab.Screen name='Active' component={ActiveScreen}/>
        <TopTab.Screen name='Non Active' component={NonActiveScreen}/>
      </TopTab.Navigator>
    </>
  );
}

export default HomeScreen;