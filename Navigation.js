import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screen/HomeScreen';
import KategoriScreen from './screen/KategoriScreen';
import KategoriTambahScreen from './screen/KategoriTambahScreen';
import KategoriUbahScreen from './screen/KategoriUbahScreen';
import SettingScreen from './screen/SettingScreen';

import BukuScreen from './screen/BukuScreen';
import BukuTambahScreen from './screen/BukuTambahScreen';
import BukuUbahScreen from './screen/BukuUbahScreen';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={NavigationTab} />
        <Stack.Screen name="KategoriScreen" component={KategoriScreen} />
        <Stack.Screen name="KategoriTambahScreen" component={KategoriTambahScreen} />
        <Stack.Screen name="KategoriUbahScreen" component={KategoriUbahScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="BukuScreen" component={BukuScreen} />
        <Stack.Screen name="BukuTambahScreen" component={BukuTambahScreen} />
        <Stack.Screen name="BukuUbahScreen" component={BukuUbahScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NavigationTab() {
  return (
    <Tab.Navigator
      activeColor="white"
      barStyle={{ backgroundColor: 'blue' }}
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
        name="KategoriTab"
        component={KategoriScreen}
        options={{
          tabBarLabel: 'Kategori',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="BukuTab"
        component={BukuScreen}
        options={{
          tabBarLabel: 'Buku',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={26} />
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