import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Appbar, TextInput, Button, Switch, List } from 'react-native-paper';
import supabase from '../supabase';

function KategoriTambahScreen({navigation}) {
  const [nama, setNama] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [StatusSwitch, setStatusSwitch] = useState (false);

  const onSimpan = async() => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
                              .from('kategori')
                              .insert({
                                nama: nama,
                                penerbit: penerbit,
                                status: StatusSwitch,
                              });

    Alert.alert("Pesan", "Data berhasil disimpan");
    console.log(error);
    navigation.goBack()
  }
  
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Tambah Kategori" />
      </Appbar.Header>

      <TextInput
        label="Nama"
        value={nama}
        onChangeText={text => setNama(text)}
      />
      
      <TextInput
        label="Penerbit"
        value={penerbit}
        onChangeText={text => setPenerbit(text)}
      />

      <List.Item
        title="Status"
        right={props =>
          <Switch 
            value={StatusSwitch}
            onValueChange={(status) => setStatusSwitch(status)}
          />
        }
      />

      <Button 
        icon="content-save" 
        mode="contained" 
        onPress={() => onSimpan()}
        style={{margin:10}}
      >Simpan</Button>
    </>
  );
}

export default KategoriTambahScreen;