import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import supabase from '../supabase';

function BukuUbahScreen({navigation, route}) {
  //state list data picker
  const [dataPicker, setDataPicker] = useState([]);
  //state picker yang dipilih
  const [kategori_id, setKategori] = useState('');

  const [judul, setJudul] = useState('');

  useEffect(() => {
    getKategori();
    getData();
  }, []);

  //list data picker
  const getKategori = async() => {
    const { data, error } = await supabase
                              .from('kategori')
                              .select('id, nama')
                              .eq('id', route.params.id)
                              .order('nama', {ascending:true});
    setDataPicker(data);
  }
  const getData = async() => {
    const { data, error } = await supabase
                              .from('buku')
                              .select('judul')
                              .eq('id', route.params.id)
                              .single();
    setJudul(data.judul);
  }

  const onSimpan = async() => {
    const { data, error } = await supabase
                              .from('buku')
                              .update({
                                judul: judul,
                                kategori_id: kategori_id,
                              });
    // console.log(error);
    Alert.alert("Pesan", "Data berhasil disimpan");
    navigation.goBack();
  }
  
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Ubah Buku" />
      </Appbar.Header>

      <Picker
        selectedValue={kategori_id}
        onValueChange={(value) => setKategori(value)}
      >
        <Picker.Item label="Pilih" value="" />
        {dataPicker.map((row) => 
          <Picker.Item label={row.nama} value={row.id} />
        )}
      </Picker>

      <TextInput
        label="Judul"
        value={judul}
        onChangeText={text => setJudul(text)}
      />

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

export default BukuUbahScreen;