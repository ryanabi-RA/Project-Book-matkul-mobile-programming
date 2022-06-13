import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { Appbar, Card, Divider, } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import NotFoundScreen from './NotFoundScreen';
import supabase from '../supabase';
function HistoryScreen({ navigation }) {
  const [data, setData] = useState('');

  useEffect(() => {
    getData();
  }, [data]);
  //list data 
  const getData = async () => {
    const { data, error } = await supabase
      .from('status_pembayaran')
      .select('*')
      .order('id_pembayaran', { ascending: true });
    setData(data);
  }

  const sortir = (a, b) => {
    let id = b;
    if (!a) {
      return ;
    }
    return (
      <Card style={{ margin: 10, borderRadius: 15, padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', paddingHorizontal: 10, paddingVertical: 2 }}>
            <Text>Id pembayaran</Text>
            <Text>Keterangan</Text>
            <Text>Status</Text>
          </View>
          <View style={{ flexDirection: 'column', paddingHorizontal: 0, paddingVertical: 2 }}>
            <Text> :  </Text>
            <Text> :  </Text>
            <Text> :  </Text>
          </View>
          <View style={{ flexDirection: 'column', paddingHorizontal: 2, paddingVertical: 2 }}>
            <Text>{id}</Text>
            <Text>Sudah Bayar</Text>
            <Text>True</Text>
          </View>
        </View>
      </Card>
    )
  }

  if (data == null) {
    return (
      <>
        <Appbar.Header >
          <Appbar.Content title="Riwayat +" color='white' />
        </Appbar.Header>
        <NotFoundScreen />
      </>
    )
  } else {
    return (
      <>
        <Appbar.Header >
          <Appbar.Content title="Riwayat +" color='white' />
        </Appbar.Header>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View key={index}>
              {sortir(item.status, item.id_pembayaran)}
              {/* <Card style={{ margin: 10, borderRadius: 15, padding: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', width: 100 }}>
                    <Text>Id pembayaran</Text>
                    <Text>Keterangan</Text>
                    <Text>Status</Text>
                  </View>
                  <View style={{ flexDirection: 'column', width: 10 }}>
                    <Text> :  </Text>
                    <Text> :  </Text>
                    <Text> :  </Text>
                  </View>
                  <View style={{ flexDirection: 'column', width: 120 }}>
                    <Text>{item.id_pembayaran}</Text>
                    <Text>{item.keterangan}</Text>
                    <Text>{status(item.status)}</Text>
                  </View>
                </View>
              </Card> */}
            </View>
          )}
        />
      </>
    )
  }
}

export default HistoryScreen;