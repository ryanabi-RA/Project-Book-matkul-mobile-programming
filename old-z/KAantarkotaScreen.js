import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Switch, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Title, Card, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import supabase from '../supabase';


function KAantarkota({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('');
  //state list data picker
  const [dataPicker, setDataPicker] = useState([]);
  const [dataPicker2, setDataPicker2] = useState([]);
  //state picker yang dipilih
  const [idKotaAsal, setKotaAsal] = useState('1');
  useEffect(() => {
    getKotaAsal();
  }, []);

  //list data picker
  const getKotaAsal = async () => {
    const { data, error } = await supabase
      .from('kota_asal')
      .select('id_kota_asal, nama_kota_asal');
    //   .order('nama_kota_asal', {ascending:true});
    setDataPicker(data);

  }
  const [idKotaTujuan, setKotaTujuan] = useState('2');
  useEffect(() => {
    getKotaTujuan();
  }, []);

  //list data picker
  const getKotaTujuan = async () => {
    const { data, error } = await supabase
      .from('kota_tujuan')
      .select('id_kota_tujuan, nama_kota_tujuan')
    //   .order('nama_kota_tujuan', {ascending:true});
    setDataPicker2(data);

  }

  return (
    <>
      <ScrollView>
        <Card style={{ margin: 10, borderRadius: 10, height: 400 }}>
          <View style={{ flexDirection: 'row' }}>
            <Card.Content style={{ alignItems: 'flex-start', width: '40%' }}>
              <Title style={{ fontSize: 20, fontWeight: 'bold' }}>Asal</Title>
              <Picker
                style={{ height: 50, width: 150 }}
                selectedValue={idKotaAsal}
                onValueChange={(value) => setKotaAsal(value)}
              >

                {dataPicker.map((row) =>
                  <Picker.Item label={row.nama_kota_asal} value={row.id_kota_asal} />
                )}
              </Picker>
            </Card.Content>
            <AntDesign style={{ margin: 10, width: '10%', textAlign: 'center' }} name="swap" size={24} color="black" />
            <Card.Content style={{ alignItems: 'flex-end', width: '40%' }}>
              <Title style={{ fontSize: 20, fontWeight: 'bold' }}>Tujuan</Title>
              <Picker
                style={{ height: 50, width: 150 }}
                selectedValue={idKotaTujuan}
                onValueChange={(value) => setKotaTujuan(value)}
              >

                {dataPicker2.map((row) =>
                  <Picker.Item label={row.nama_kota_tujuan} value={row.id_kota_tujuan} />
                )}
              </Picker>
            </Card.Content>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Card.Content style={{ alignItems: 'flex-start' }}>
              <Title style={{ fontSize: 15, fontWeight: 'bold' }}>Tanggal Berangkat</Title>
              <TextInput placeholder='Tanggal'
                style={{ backgroundColor: '#edf2ef', height: 40, width: 150, borderRadius: 10 }}
              >
              </TextInput>
            </Card.Content>
            {/* <Card.Content style={{ alignItems:'center'}}>
                    <Title style={{fontSize:15, fontWeight:'bold'}}>Tanggal Kembali</Title>
                    <TextInput placeholder='Tanggal'
                    style={{backgroundColor:'#edf2ef',height:40,width:150,borderRadius:10}}
                    >
                    </TextInput>
                </Card.Content> */}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Card.Content style={{ alignItems: 'flex-start' }}>
              <Title style={{ fontSize: 17, fontWeight: 'bold' }}>Kelas Kereta</Title>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Eksekutif" value="Eksekutif" />
                <Picker.Item label="Bisnis" value="bisni" />
                <Picker.Item label="Ekonomi" value="Ekonomi" />
              </Picker>
            </Card.Content>

            <Card.Content style={{ alignItems: 'flex-end' }}>
              <Title style={{ fontSize: 17, fontWeight: 'bold' }}>Penumpang</Title>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{ backgroundColor: '#edf2ef', height: 40, width: 70, borderRadius: 10, marginHorizontal: 10 }}
                  placeholder="Dewasa"
                />
                <TextInput
                  style={{ backgroundColor: '#edf2ef', height: 40, width: 70, borderRadius: 10 }}
                  placeholder="Bayi"
                />
              </View>
              {/* <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Bayi" value="bayi" />
                            <Picker.Item label="Dewasa" value="dewasa" />
                    </Picker> */}
            </Card.Content>
          </View>
          <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 10, color: 'grey' }}>Penumpang bayi tidak mendapatkan kursi sendiri</Text>
          <TouchableOpacity
            style={{ backgroundColor: 'orange', margin: 10, borderRadius: 12, height: 50, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('PencarianScreen', { idKotaAsal, idKotaTujuan, })}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', margin: 10, fontSize: 20, }} >Cari</Text>
          </TouchableOpacity>
          {/* <Button style={{backgroundColor:'orange', margin:10,  borderRadius:12, height:50}} 
                onPress={() => navigation.navigate('PencarianScreen')}
                // onPress={() => alert(kota_tujuan)}
                >
                    <Text style={{color:'white', fontWeight:'bold', margin:10}} >Cari</Text>
                </Button> */}
        </Card>
      </ScrollView>
    </>
  );
}

export default KAantarkota;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  cardkaipay: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 80,
    width: '50%',
    backgroundColor: 'white',
  },
  cardpoint: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 80,
    width: '50%',
    backgroundColor: 'white',
  },
  kaipaypointlogo: {
    marginHorizontal: 14,
    marginVertical: 4,
    height: 50,
    width: 50
  }
});