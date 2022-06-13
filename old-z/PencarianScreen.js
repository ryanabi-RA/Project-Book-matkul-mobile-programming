import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, FlatList } from 'react-native';
import { Appbar, Card, Colors, List, Title } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import supabase from '../supabase';
const Tab = createMaterialTopTabNavigator();

function PencarianScreen({navigation}) {
  const [data, setData] = useState([]);
  let kota_asal = '3';
  let kota_tujuan = '4';
  const countDate = (a) => {
    let number = a;
    return number + 1;
  }
  useEffect(() => {
    getData();
  }, [data]);

  const check = (a) => {
    
  }
  const getData = async () => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
      .from('jadwal_rute_perjalanan')
      .select('*, kereta:kode_kereta(nama_kereta), kota_asal:id_kota_asal(nama_kota_asal), kota_tujuan:id_kota_tujuan(nama_kota_tujuan)')
      // .eq('kota_asal.nama_kota_asal', 'jakarta')
      .eq('tanggal_perjalanan', '2022-06-01 ')
      .match({id_kota_asal: kota_asal, id_kota_tujuan: kota_tujuan})
      .order('id_jadwal', { ascending: false });
    //mengisi state data
    setData(data);
  }
  

  if (data == null) {
    return (
      <>
      <Appbar.Header>
        <Appbar.Content title="Riwayat" color='white' />
      </Appbar.Header>
      <NotFoundScreen />
      </>

    )
    
  } else {
  return (
    <>
    <Appbar.Header  style={{height:50, alignItems:'center', justifyContent:'center'}} >
    <Appbar.BackAction onPress={() => navigation.goBack()} />
    <Appbar.Content title="Pencarian"/>
</Appbar.Header>


  
    
      {/* <List.Section>{data.map( post => <List.item key={post.id_kota_asal}>{post.id_kota_asal}</List.item>)}</List.Section> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View key={index}>
            
            <Card style={{margin: 10,borderRadius:15,}} onPress={() => navigation.navigate('RingkasanPemesananScreen')}>
            <Image style={{margin:20,height:30, width:100}} source={require('../assets/kailogowarna.png')}/>
            <View style={{flexDirection:'row'}}>
              <Text style={
                {
                  margin:10,
                  color:'blue',
                  fontWeight:'bold',
                  fontSize:20,
                  width:'50%'
                }
              }>{item.kereta.nama_kereta}</Text>
              <Text style={
                {
                  margin:10,
                  width:'40%',
                  textAlign:'right',
                  color:'blue',
                  fontWeight:'bold',
                  fontSize:15,
                }
              }>Rp.{item.harga}</Text></View>
              <View style={{flexDirection:'row'}}>
              <Text 
                style={{
                  width:'50%',
                  margin:10,
                  textAlign:'left'
                  }}>{item.kota_asal.nama_kota_asal} 
              </Text>
              <Text style={{
                  width:'40%',
                  margin:10,
                  textAlign:'right'
                  }}>{item.kota_tujuan.nama_kota_tujuan}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text 
                style={{
                  width:'33.3%',
                  marginLeft:10,
                  textAlign:'left',
                  fontSize:20,
                  fontWeight:'bold',
                  color:'blue'
                  }}>{item.jam_keberangkatan} 
              </Text>
              <Text style={{
                fontSize:30,
                fontWeight:'bold',
                width:'33.3%',
                textAlign:'center'
              }}>></Text>
              <Text style={{
                  width:'25%',
                  marginLeft:10,
                  textAlign:'right',
                  fontSize:20,
                  fontWeight:'bold',
                  color:'blue'
                  
                  }}>{item.jam_sampai}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{width:'50%',margin:10}}>{item.tanggal_perjalanan}</Text>
              <Text  style={{width:'40%',margin:10,textAlign:'right',}}>{item.tanggal_perjalanan.toString().slice(0, 8)}{countDate(parseFloat(item.tanggal_perjalanan.toString().slice(8)))}</Text></View>
              
            </Card>
          </View>
        )}
      />
    </>
  );    
}

}
{/* <ScrollView horizontal={true}> */}
{/* <Tab.Navigator tabBarOptions={{
                        
                        indicatorStyle:{
                                backgroundColor:'orange',
                                height:3,
                                },
                        labelStyle:{
                                fontWeight:'bold',
                                fontSize:12,
                                color:'orange',
                                }
                                }}>
      <Tab.Screen name="Senin" component={SeninScreen} />
      <Tab.Screen name="Selasa" component={SelasaScreen} />
      <Tab.Screen name="Rabu" component={RabuScreen} />
      <Tab.Screen name="Kamis" component={KamisScreen} />
      <Tab.Screen name="Jumat" component={JumatScreen} />
      <Tab.Screen name="Sabtu" component={SabtuScreen} />
      <Tab.Screen name="Minggu" component={MingguScreen} />
    </Tab.Navigator> */}
    {/* </ScrollView> */}
 

export default PencarianScreen;

