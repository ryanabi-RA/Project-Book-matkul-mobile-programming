import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();


import HomeScreen from './screen_tb2/HomeScreen';
import AccountScreen from './screen_tb2/AccountScreen';
import HistoryScreen from './screen_tb2/HistoryScreen';
import BookingScreen from './screen_tb2/BookingScreen';
import SearchScreen from './screen_tb2/SearchScreen';
import OrderScreen from './screen_tb2/OrderScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={NavigationTab} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
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
      component={BookingScreen}
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