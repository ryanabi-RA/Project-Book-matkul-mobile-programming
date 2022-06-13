import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './screens_tb2/HomeScreen';
import AccountScreen from './screens_tb2/AccountScreen';
import TicketScreen from './screens_tb2/TicketScreen';
import HistoryScreen from './screens_tb2/HistoryScreen';
import SearchScreen from './screens_tb2/SearchScreen';
import InputDataScreen from './screens_tb2/InputDataScreen';
import NotFoundRuteScreen from './screens_tb2/NotFoundRuteScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={NavigationTab} />
        <Stack.Screen name="TicketScreen" component={TicketScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="InputDataScreen" component={InputDataScreen} />
        <Stack.Screen name='NotFountRuteScreen' component={NotFoundRuteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavigationTab() {
  return (
    <Tab.Navigator // activeColor="white"
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TiketTab"
        component={TicketScreen}
        options={{
          tabBarLabel: 'Tiket',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-percent" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RiwayatTab"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Riwayat',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history-edu" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AkunTab"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;