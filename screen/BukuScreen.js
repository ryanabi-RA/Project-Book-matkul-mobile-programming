import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Appbar, Button, List, Searchbar } from 'react-native-paper';
import supabase from '../supabase';

function BukuScreen({navigation}) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = React.useState('');

  //script dijalankan ketika screen diakses
  useEffect(() => {
    getData();

  // data, searchText : jika ada perubahan pada 2 state ini, akan memanggil getData
  }, [data, searchText]);

  const getData = async() => {
    //query awal
    let query = supabase
                  .from('buku')
                  .select('id, judul, kategori!inner(nama)')
                  .order('id', {ascending:false});

    //filter query jika ada search
    if (searchText != '') { 
      query = query.ilike('judul', '%'+searchText+'%') }
    
    //jalankan query
    const { data, error } = await query;
    setData(data);
  }

  return (
    <>
        <Appbar.Header>
            <Appbar.Content title="Buku" />
        </Appbar.Header>

        <Searchbar
          placeholder="Cari judul"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <List.Item
                  key={index}
                  title={item.judul}
                  description={item.kategori.nama}
                  left={props => <List.Icon {...props} icon="book" />}
                  right={props => <List.Icon {...props} icon="pencil" />}
                  onPress={() => navigation.navigate('BukuUbahScreen', {id: item.id})}
                />
              )}
        />

        <Button 
            icon="plus" 
            mode="contained" 
            onPress={() => navigation.navigate('BukuTambahScreen')}
            style={{margin:10}}
        >
          Tambah Buku
        </Button>
    </>
  );
}

export default BukuScreen;