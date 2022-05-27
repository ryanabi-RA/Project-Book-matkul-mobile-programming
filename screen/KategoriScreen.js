import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Appbar, Button, List } from 'react-native-paper';
import supabase from '../supabase';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

function KategoriScreen({navigation}) {
  //state data : default array (karena untuk menyimpan banyak data)
  const [data, setData] = useState([]);

  //script dijalankan ketika screen diakses
  useEffect(() => {
    getData();
  }, [data]);

  const getData = async() => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
                              .from('kategori')
                              .select('id, nama,penerbit,status')
                              .order('id', {ascending:false});
    //mengisi state data
    setData(data);
  }
  
  const getIcon = (icon) => {
    var setIcon = (!icon) ? "close":"check";
    return setIcon;
  }

  const getColor = (color) => {
    var setColor = (!color) ? "red":"green";
    return setColor;
  }

  const getStatus = (status) => {
    var setStatus = (!status) ? "Tidak aktif":"Aktif";
    return setStatus;
  }

  const onPrint = async(data) => {
    //file content
    let html = `<ul>`;
                data.map((item) => {
                  html += `<li>`+ item.nama + `&nbsp;` + '(' + getStatus(item.status) +')'+
                              `<br>`
                              + item.penerbit +
                          `</li>`;
                });
        html += `</ul>`;

    //print file
    const { uri } = await Print.printToFileAsync({
      html
    });

    //share file
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  return (
    <>
        <Appbar.Header>
          <Appbar.Content title="Kategori" />
          <Appbar.Action icon="printer" onPress={() => onPrint(data)} />
        </Appbar.Header>

        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <List.Item
                  key={index}
                  title={item.nama}
                  description={item.penerbit}
                  left={props => 
                    <List.Icon {...props} 
                      icon={getIcon(item.status)} 
                      color={getColor(item.status)} 
                    />
                  }
                  right={props => <List.Icon {...props} icon="pencil" />}
                  onPress={() => navigation.navigate('KategoriUbahScreen', {id: item.id})}
                />
              )}
        />

        <Button 
            icon="plus" 
            mode="contained" 
            onPress={() => navigation.navigate('KategoriTambahScreen')}
            style={{margin:10}}
        >
          Tambah Kategori
        </Button>
    </>
  );
}

export default KategoriScreen;