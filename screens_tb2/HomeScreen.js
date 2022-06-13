import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, } from 'react-native';
import { Appbar, Button, List, Title, Paragraph, Card, TextInput, Searchbar, Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import KAantarkota from './KAantarkotaScreen';
import KALokal from './KAlokalScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <>
            <Appbar.Header style={{ height: 70, justifyContent: 'center', }} >
                <Image style={{ height: 50, width: 70, }} source={require('../assets/logo_kai_transparent.png')} />
                {/* <AntDesign style={{ marginRight: 10, alignItems: "flex-end" }} name="shoppingcart" size={30} color="white" /> */}
            </Appbar.Header>

            <Card style={{ margin: 20, borderRadius: 20, height: 80 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Card style={styles.cardkaipay}>
                        <List.Item
                            title="KAIPay"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            description="Aktivasi"
                            descriptionStyle={{ color: 'green', fontWeight: 'bold' }}
                            onPress={() => navigation.navigate('Chat1')}
                            left={props => <Image style={styles.kaipaypointlogo} source={require('../assets/kaipaylogo.png')} />}
                        />
                    </Card>
                    <Card style={styles.cardpoint}>
                        <List.Item
                            title="Poin Anda"
                            titleStyle={{ color: 'black', fontSize: 12 }}
                            description="-- Poin"
                            descriptionStyle={{ color: 'blue', fontWeight: 'bold' }}
                            onPress={() => navigation.navigate('Chat3')}
                            left={props => <Image style={styles.kaipaypointlogo} source={require('../assets/kaipointlogo.png')} />}
                        />
                    </Card>
                </View>
            </Card>
            <Tab.Navigator
                activeColor="blue"
                tabBarOptions={{
                    style: { backgroundColor: 'white' },
                    indicatorStyle: {
                        backgroundColor: 'blue',
                        height: 5,
                    },
                    labelStyle: { color: 'blue', fontWeight: '600', }
                }}
            >
                <Tab.Screen name="KA Antar Kota" component={KAantarkota} />
                <Tab.Screen name="KA Lokal" component={KALokal} />
            </Tab.Navigator>

        </>
    );
}

export default HomeScreen;

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