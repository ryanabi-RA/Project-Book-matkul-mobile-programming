import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();


import HomeScreen from '../screen_tb2/HomeScreen';
import AccountScreen from '../screen_tb2/AccountScreen';
import HistoryScreen from '../screen_tb2/HistoryScreen';
import KAantarkota from '../screen_tb2/KAantarkotaScreen';
import KALokal from '../screen_tb2/KAlokalScreen';
import WaitingScreen from '../screen_tb2/WaitingScreen';
import ActiveScreen from '../screen/ActiveScreen';
import bookingscreen from '../screen_tb2/bookingscreen';
import PencarianScreen from '../screen_tb2/PencarianScreen';
import RingkasanPemesananScreen from '../screen_tb2/RingakasanPemesananScreen';
import RincianPembayaranScreen from '../screen_tb2/RincianPembayaranScreen';
import SearchScreen from '../screen_tb2/SearchScreen';
import PesanTiketScreen from '../screen_tb2/PesanTiketScreen';
import InputDataScreen from '../screen_tb2/InputDataScreen';
import NotFoundRuteScreen from '../screen_tb2/NotFoundRuteScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={NavigationTab} />
        <Stack.Screen name="KAantarKotaScreen" component={KAantarkota}/>
        <Stack.Screen name="KAlokalScreen" component={KALokal}/>
        <Stack.Screen name="WaitingScreen" component={WaitingScreen}/>
        <Stack.Screen name="AccountScreen" component={AccountScreen}/>
        <Stack.Screen name="ActiveScreen" component={ActiveScreen}/>
        <Stack.Screen name="HistoryScreen" component={HistoryScreen}/>
        <Stack.Screen name="bookingscreen" component={bookingscreen}/>
        <Stack.Screen name="PencarianScreen" component={PencarianScreen}/>
        <Stack.Screen name="RingkasanPemesananScreen" component={RingkasanPemesananScreen}/>
        <Stack.Screen name='RincianPembayaranScreen' component={RincianPembayaranScreen}/>
        <Stack.Screen name='SearchScreen' component={SearchScreen}/>
        <Stack.Screen name='PesanTiketScreen' component={PesanTiketScreen}/>
        <Stack.Screen name='InputDataScreen' component={InputDataScreen}/>
        <Stack.Screen name='NotFountRuteScreen' component={NotFoundRuteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavigationTab() {
  return (
    <Tab.Navigator 
    activeColor="blue"
    barStyle={{ 
      backgroundColor: 'white',
      height: 80, 
      justifyContent: "center",
    }}
  >
    <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons  name="home" color={color} size={26} />),
        }}
      />
    <Tab.Screen
      name="TicketTab"
      component={bookingscreen}
      options={{
        tabBarLabel: 'Tiket',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="ticket-percent" color={color}size={26} />),
      }}
    />
    <Tab.Screen
      name="HistoryScreen"
      component={HistoryScreen}
      options={{
        tabBarLabel: 'Riwayat',
        tabBarIcon: ({ color }) => (<MaterialIcons name="history-edu" size={24} color={color} />),
      }}
    />
    <Tab.Screen
      name="AkunTab"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Akun',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />),
      }}
    /> 
  </Tab.Navigator>
  );
}

export default Navigation;