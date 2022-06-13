import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, List,Switch } from 'react-native-paper';
import supabase from '../supabase';

function KategoriUbahScreen({navigation, route}) {
  const [nama, setNama] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [status, setStatus] = useState('');

  //script dijalankan ketika screen diakses
  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const { data, error } = await supabase
                              .from('kategori')
                              .select('nama,penerbit,status')
                              .eq('id', route.params.id)
                              .single();
    setNama(data.nama);
    setPenerbit(data.penerbit);
    setStatus(data.status);
  }

  const onSimpan = async() => {
    const { data, error } = await supabase
                              .from('kategori')
                              .update({
                                nama: nama,
                                penerbit:penerbit,
                                status: status,
                              })
                              .eq('id', route.params.id);

    Alert.alert("Pesan", "Data berhasil disimpan");
    navigation.goBack()
  }

  const konfirmasiHapus = () => {
    Alert.alert("Pesan", "Yakin hapus data?",
      [
        { text: "Batal" },
        { text: "Hapus", onPress: () => onHapus() }
      ]
    );
  }

  const onHapus = async() => {
    const { data, error } = await supabase
                              .from('kategori')
                              .delete()
                              .eq('id', route.params.id);

    Alert.alert("Pesan", "Data berhasil dihapus");
    navigation.goBack()
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Ubah Kategori" />
        <Appbar.Action icon="delete" onPress={() => konfirmasiHapus()} />
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
      right={ props =>
    <Switch
          value={status}
          onValueChange={(status)=>setStatus(status)}
        />}/>
      <Button 
        icon="content-save" 
        mode="contained" 
        onPress={() => onSimpan()}
        style={{margin:10}}
      >
        Simpan
      </Button>
    </>
  );
}

export default KategoriUbahScreen;