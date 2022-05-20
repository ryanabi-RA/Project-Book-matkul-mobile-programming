import React from 'react';
import { Appbar, List } from 'react-native-paper';
import { Octicons, MaterialCommunityIcons, Ionicons, FontAwesome, Foundation }
    from '@expo/vector-icons';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

function SettingScreen({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Setting" />
      </Appbar.Header>
    </>
  );
}

export default SettingScreen;