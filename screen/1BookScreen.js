import React, { useState, useEffect } from 'react';
import { Appbar, Button, List } from 'react-native-paper';
import supabase from '../supabase';

function BookScreen({navigation}) {
  const [judul, setJudul] = useState('');
  const [stok, setStok] = useState('');

  //script dijalankan ketika screen diakses
  useEffect(() => {
    getData();
  }, []);

  // const getDataURL = async() => {
  //   fetch("https://czumsavaxnzxlqcqjqcu.supabase.co/rest/v1/kategori?select=judul", {
  //         method: 'get', 
  //         headers: {
  //             'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dW1zYXZheG56eGxxY3FqcWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyMjM2ODQsImV4cCI6MTk2NDc5OTY4NH0.dvpeurHCH0HfnxGVKm7ypingS3PpeqXAhdWAozy2n5o',
  //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dW1zYXZheG56eGxxY3FqcWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyMjM2ODQsImV4cCI6MTk2NDc5OTY4NH0.dvpeurHCH0HfnxGVKm7ypingS3PpeqXAhdWAozy2n5o'
  //         }
  //     })
  //     .then(res => res.json())
  //     .then((data) => {
  //         console.log('data', data)
  //         setJudul(data[1].judul)
  //         setStok(data[1].stok)
  //       },
  //       (error) => {
  //         console.log('error', error);
  //       }
  //     )
  //   //setData(data);
  // }

  const getData = async() => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
                              .from('book')
                              .select('judul, stok');
                              
    console.log('data', data);
    console.log('error', error);
    setJudul(data[1].judul)
    setStok(data[1].stok)
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="List Buku" />
      </Appbar.Header>

      <List.Item
        title={judul}
        description={stok}
        left={props => <List.Icon {...props} icon="book" />}
        right={props => <List.Icon {...props} icon="pencil" />}
        onPress={() => navigation.navigate('KategoriUbahScreen')}
      />
    
      <Button 
        icon="plus" 
        mode="contained" 
        onPress={() => navigation.navigate('KategoriTambahScreen')}
        style={{margin:10}}
      >
        Tambah Buku
      </Button>
    </>
  );
}

export default BookScreen;