import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

function NotFoundScreen({ navigation }) {
  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontWeight: '900', fontSize: 32, color: 'grey' }}>Ups !</Text>
      <Image style={styles.img}
        source={require('../assets/logo_not_found_kai.png')}
      />
      <Text style={styles.text}>Kamu belum memiliki tiket</Text>
      <Text style={styles.text}>Ayo pesan tiket keberangkatan sekarang! Tiket kamu akan ditampilkan disini</Text>
    </View>
    // <View style={styles.container}>
    //   <Image
    //     source={require('../assets/logo_not_found_kai.png')}
    //   />
    //   <Text style={styles.text}>Kamu belum memiliki tiket</Text>
    //   <Text style={styles.text}>Ayo pesan tiket keberangkatan sekarang! Tiket kamu akan ditampilkan disini</Text>
    // </View>
  );
}

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 400,
    margin: '5%',
    marginVertical: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
//   stretch: {
//     width: 200,
//     height: 200,
//     // resizeMode: 'stretch',
//   },
  text: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 24,
    fontWeight: '400',
  }
});