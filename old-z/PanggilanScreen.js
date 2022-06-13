import React from 'react';
import {List } from 'react-native-paper';

function PanggilanScreen({navigation}) {
  return (
    <>
      <List.Item 
        title="Ryan"
        titleStyle={{color:'black'}}
        descriptionStyle={{color:'black'}}
        left={props => <List.Icon{...props} icon="account"/>}
      />
      <List.Item 
        title="Handika"
        titleStyle={{color:'black'}}
        descriptionStyle={{color:'black'}}
        left={props => <List.Icon{...props} icon="account"/>}
      />
      <List.Item 
        title="BAK Mercubuana"
        titleStyle={{color:'black'}}
        descriptionStyle={{color:'black'}}
        left={props => <List.Icon{...props} icon="account"/>}
      />


    </>
  );
}

export default PanggilanScreen;