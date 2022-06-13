import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Appbar, Button, List, Title, Paragraph, Card, TextInput, Searchbar } from 'react-native-paper';

function HomeScreen({ navigation }) {
    return (
        <>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: '100vh',
    },
    containerImg: {
        margin: 10,
        padding: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'blue',
        backgroundColor: 'white',
    },
    img: {
        width: 370,
        height: 200,
        borderRadius: 8,
    },
    menu: {
        height: 420,
        margin: 10,
        padding: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'blue',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    search: {
        width: '100%',
        height: 100,
        padding: 4,
        flexDirection: 'row',
    },
    inputText: {
        margin: 2,
        width: '48%',
        height: 40,
    },
    input: {
        height: 32,
    },
    inputTanggal: {
        width: '80%',
        height: 40,
        margin: 5,
    },
    button: {
        margin: 10,
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'blue',
    }
});