import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Appbar, Button, List, Title, Paragraph, Card } from 'react-native-paper';
import supabase from '../supabase';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

function BookingScreen({ navigation }) {
  //state data : default array (karena untuk menyimpan banyak data)
  const [data, setData] = useState([]);

  const onPrint = async (data) => {
    //file content
    let html = `<ul>`;
    data.map((item) => {
      html += `<li>` + item.nama + `&nbsp;` + '(' + getStatus(item.status) + ')' +
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
        <Appbar.Content title="Booking" />
        <Appbar.Action icon="printer" onPress={() => onPrint(data)} />
      </Appbar.Header>


      <List.Section style={styles.container}>
        <List.Item style={styles.item}
          left={() => <Title style={styles.title}>Jakarta</Title>}
          centered={() => <List.Icon color="#fff" icon="folder" />}
          right={() => <Title style={styles.title}>Surabaya</Title>}
        />
        <List.Item style={styles.content}
          left={() =>
            <>
              <Card>
                <Card.Content>
                  <Title>Nama Pengguna</Title>
                  <Paragraph>Ryan Abi</Paragraph>
                </Card.Content>
              </Card>
            </>
          }
          right={() =>
            <>
              <Card>
                <Card.Content>
                  <Title>Nama KA</Title>
                  <Paragraph>Argo Bima</Paragraph>
                </Card.Content>
              </Card>
            </>
          }
        />
        <Card>
          <View style={{flexDirection:'row'}}>
          <Card.Content >
            <Title>Tanggal</Title>
            <Paragraph>20 oktober</Paragraph>
          </Card.Content>
          <Card.Content>
            <Title style={{fontSize:15, fontWeight:'bold'}}>Jam Berangkat</Title>
            <Paragraph style={{textAlign:'center'}}>06:00</Paragraph>
          </Card.Content>
          <Card.Content >
            <Title style={{fontSize:15, fontWeight:'bold'}}>Jam Sampai</Title>
            <Paragraph style={{textAlign:'center'}}>15:00</Paragraph>
          </Card.Content>
          </View>
          
        </Card>
      </List.Section>
    </>
  );
}


export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
  },
  item: {
    backgroundColor: 'blue',
  },
  title: {
    marginHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
    // fontSize: 30,
  },
  content: {
    height: 100,
  },
  card: {
    flexDirection: 'row',
    width: '20%',
  }
});