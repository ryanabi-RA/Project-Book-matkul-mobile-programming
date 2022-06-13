import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Appbar, Button, List, Title, Paragraph, Card, TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import supabase from '../supabase';

function OrderScreen({ navigation }) {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Order" />
            </Appbar.Header>

            <Card style={styles.container}>
                <View style={styles.containerRute}>
                    <View style={styles.listRute}>
                        <Card.Content>
                            <Title style={styles.titleRute}>Jakarta</Title>
                        </Card.Content>
                        <Card.Content>
                            <AntDesign name="arrowright" size={32} color="white" />
                        </Card.Content>
                        <Card.Content>
                            <Title style={styles.titleRute}>Surabaya</Title>
                        </Card.Content>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Card.Content>
                            <Title>Kereta</Title>
                            <Paragraph>Argo Bima</Paragraph>
                        </Card.Content>
                        <Card.Content>
                            <Title style={{ fontSize: 15, fontWeight: 'bold' }}>Berangkat</Title>
                            <Paragraph style={{ textAlign: 'center' }}>06:00</Paragraph>
                        </Card.Content>
                        <Card.Content >
                            <Title style={{ fontSize: 15, fontWeight: 'bold' }}>Sampai</Title>
                            <Paragraph style={{ textAlign: 'center' }}>15:00</Paragraph>
                        </Card.Content>
                    </View>
                    <List.Item style={{marginTop: 10,}}
                        left={() => <Title style={styles.title}>Harga</Title>}
                        right={() => <Title style={styles.title}>Rp.200.000</Title>}
                    />
                </View>
                <Card.Content style={styles.Content}>
                    <TextInput style={styles.input}
                        label="Nama"
                    />
                    <TextInput style={styles.input}
                        label="No Telepon"
                    />
                    <TextInput style={styles.input}
                        label="Tanggal"
                    />
                    <Button
                        icon="content-save"
                        mode="contained"
                        style={{ margin: 10 }}
                    >
                        Beli Tiket
                    </Button>
                </Card.Content>
            </Card>

        </>
    );
}


export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        // height: '100%',
        marginHorizontal: '5%',
        marginVertical: 20,
        padding: 0,
        border: 10,
        borderRadius: 16,
        borderColor: 'blue',
    },
    content: {
        // margin: '20%',
        padding: 10,
        backgroundColor: 'blue100',
        width: '80%',
        height: 400,
    },
    input: {
        height: 50,
        border: 2,
        borderRadius: 8,
        borderColor: 'blue100',
        marginVertical: 6,
    },
    listRute: {
        padding: 0,
        margin: 20,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'blue',
    },
    titleRute: {
        padding: 0,
        fontSize: 24,
        fontWeight: "600",
        // color: "coral",
        color: 'white',
    },
    containerRute: {
        alignItems: 'center',
        margin: 20,
    },
});