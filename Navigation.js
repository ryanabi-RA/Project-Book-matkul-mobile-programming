import React from 'react';
import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screen/HomeScreen';
import KategoriScreen from './screen/KategoriScreen';
import KategoriTambahScreen from './screen/KategoriTambahScreen';
import KategoriUbahScreen from './screen/KategoriUbahScreen';
import SettingScreen from './screen/SettingScreen';
import BukuScreen from './screen/BukuScreen';
import ActiveScreen from './screen/ActiveScreen';
import NonActiveScreen from './screen/NonActiveScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={NavigationTab} />
        <Stack.Screen name="ActiveScreen" component={ActiveScreen} />
        <Stack.Screen name="NonActiveScreen" component={NonActiveScreen} />
        <Stack.Screen name="BukuScreen" component={BukuScreen} />
        <Stack.Screen name="KategoriScreen" component={KategoriScreen} />
        <Stack.Screen name="KategoriTambahScreen" component={KategoriTambahScreen} />
        <Stack.Screen name="KategoriUbahScreen" component={KategoriUbahScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavigationTab() {
  return (
    <Tab.Navigator
      activeColor="white"
      barStyle={{ backgroundColor: '#8f9bff' }}
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
        name="BookTab"
        component={BukuScreen}
        options={{
          tabBarLabel: 'Book',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="KategoriTab"
        component={KategoriScreen}
        options={{
          tabBarLabel: 'Kategori Buku',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingTab"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;