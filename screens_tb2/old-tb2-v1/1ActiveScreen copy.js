import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Appbar, Card, Divider, } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import NotFoundScreen from './NotFoundScreen';
import supabase from '../supabase';

function ActiveScreen({ navigation }) {
  const [data, setData] = useState('');

  useEffect(() => {
    getData();
  }, [data]);
  //list data 
  const getData = async () => {
    const { data, error } = await supabase
      .from('ticket')
      .select('*, kereta:kode_kereta(nama_kereta), kota_asal:id_kota_asal(nama_kota_asal), kota_tujuan:id_kota_tujuan(nama_kota_tujuan), jadwal_rute_perjalanan:id_jadwal(jam_keberangkatan,jam_sampai)')
      .order('id_ticket', { ascending: false });
    setData(data);
  }
  const countDate = (a) => {
    let number = a + 1;
    if (number < 10) {
      return '0' + number.toString();
    }
    return number;
  }
  const bayi = (a) => {
    if (a == null) {
      return ;
    }
    return ", " + a + " Bayi";
  }


  
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id_ticket}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Card style={{ margin: 10, borderRadius: 10 }}>
              <Image style={{ margin: 20, height: 20, width: 50 }} source={require('../assets/kailogowarna.png')} />
              <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                <Ionicons name="train-outline" size={40} color="black" />
                <Text style={{ fontSize: 25, fontWeight:'bold' }}> ID Tiket : {item.id_ticket}</Text>
              </View>
              <Text style={{ fontSize: 18, fontWeight: '400', marginHorizontal:10 }}>Nama            : {item.nama_customer}</Text>
              <Text style={{  fontSize: 18, fontWeight: '400',marginHorizontal:10 }}>No Telepon    : {item.no_telp_customer}</Text>
              <Text style={{  fontSize: 18, fontWeight: '400',marginHorizontal:10 }}>Kelas Kereta  : {item.kelas_kereta}</Text>
              <Text style={{  fontSize: 18, fontWeight: '400',marginHorizontal:10 }}>Penumpang   : {item.dewasa} Dewasa{bayi(item.bayi)}</Text>
              <Divider style={{ height: 3, alignSelf: 'center', width: '90%', marginVertical:10 }} />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ margin: 10, width: '50%', fontSize: 16, fontWeight: 'bold' }}>{item.kota_asal.nama_kota_asal}</Text>
                <Text style={{ margin: 10, width: '40%', textAlign: 'right', fontSize: 16, fontWeight: 'bold' }}>{item.kota_tujuan.nama_kota_tujuan}</Text>
              </View>
              {/* <Text> Nama Kereta : {item.kota_asal.nama_kota_asal}</Text> */}
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text style={{
                  width: '40%',
                  textAlign: 'left',
                  fontWeight: 'bold',
                  fontSize: 25,
                }}>{item.jadwal_rute_perjalanan.jam_keberangkatan}</Text>
                <MaterialIcons style={{ width: '30.3%', textAlign: 'center' }} name="keyboard-arrow-right" size={40} color="black" />
                <Text
                  style={{
                    width: '30%',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontWeight: 'bold',
                    fontSize: 25,
                  }}>{item.jadwal_rute_perjalanan.jam_sampai}
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    width: '50%',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    margin: 10
                  }}>{item.tanggal_tiket}
                </Text>
                <Text style={{
                    width: '40%',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    margin: 10
                  }}>{item.tanggal_tiket.toString().slice(0, 8)}{countDate(parseFloat(item.tanggal_tiket.toString().slice(8)))}</Text>
                {/* <Text
                  style={{
                    width: '40%',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    margin: 10
                  }}>{countDate(tanggal_tiket)}
                </Text> */}
              </View>
            </Card>
          </View>
        )}
      />

    </>
  );
}
// <View>
//   {/* <View style={styles.container}>
//     <Appbar.Header>
//       <Appbar.Content title="Aktif" color='white' />
//     </Appbar.Header> 
//     <TouchableOpacity
//       style={styles.btn} // onPress={onPress}
//     >
//       <Text>KA Antar Kota</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.btn} // onPress={onPress}
//     >
//       <Text>KA Lokal</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={{
//         backgroundColor: isActive ? 'black' : 'white',
//         color: isActive ? 'white' : 'black',
//         height: 30,
//         width: 'auto',
//         borderWidth: 2,
//         borderRadius: 16,
//         borderColor: 'blue',
//         marginVertical: 20,
//         marginHorizontal: 10,
//         paddingHorizontal: 20,
//         textAlign: 'center',
//         justifyContent: 'center',
//       }} // onClick={handleClick}
//       onPress={() => { this.handleClick }}
//     >
//       <Text>Layanan</Text>
//     </TouchableOpacity>
//   </View> */}
//   <NotFoundScreen />
// </View>


export default ActiveScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btn: {
    height: 30,
    width: 'auto',
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'center',
    // color: 'black',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'blue',
    // backgroundColor: 'blue',
  },
  content: {
    width: '100%',
    // height: '100vh',
    paddingTop: 80,
    // justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: 'grey',
  }
  // btnActive: {
  //   backgroundColor: isActive ? 'blue' : 'white',
  //   color: isActive ? 'white' : 'blue',
  // }
});