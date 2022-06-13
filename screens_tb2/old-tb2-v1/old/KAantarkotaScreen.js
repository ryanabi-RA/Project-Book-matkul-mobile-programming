import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Switch, TextInput, Text } from 'react-native';
import { Title, Card, Button } from 'react-native-paper';
import { Picker } from "@react-native-picker/picker";
    

function KAantarkota({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("java");
    // const [selectedValue, setSelectedValue] = useState("java");
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <Card style={{margin:10, borderRadius:10, height:400}}>
                <View style={{flexDirection:'row'}}>
                <Card.Content style={{alignItems:'center'}}>
                    <Title style={{fontSize:20, fontWeight:'bold'}}>Asal</Title>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Jakarta" value="jakarta" />
                            <Picker.Item label="Bandung" value="bandung" />
                    </Picker>
                </Card.Content>
                <Card.Content style={{alignItems:'center'}}>
                    <Title style={{fontSize:20, fontWeight:'bold'}}>Tujuan</Title>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Jakarta" value="jakarta" />
                            <Picker.Item label="Bandung" value="bandung" />
                    </Picker>
                </Card.Content>
                </View>
               
                <View style={{flexDirection:'row', marginTop:20}}>
                <Card.Content style={{alignItems:'center'}}>
                    <Title style={{fontSize:15, fontWeight:'bold'}}>Tanggal Berangkat</Title>
                    <TextInput placeholder='Tanggal'
                    style={{backgroundColor:'#edf2ef',height:40,width:150, borderRadius:10}}
                    >
                    </TextInput>
                </Card.Content>
                <Card.Content style={{ alignItems:'center'}}>
                    <Title style={{fontSize:15, fontWeight:'bold'}}>Tanggal Kembali</Title>
                    <TextInput placeholder='Tanggal'
                    style={{backgroundColor:'#edf2ef',height:40,width:150,borderRadius:10}}
                    >
                    </TextInput>
                </Card.Content>
                </View>
                <View style={{flexDirection:'row', marginTop:20}}>
                <Card.Content style={{alignItems:'center'}}>
                    <Title style={{fontSize:17, fontWeight:'bold'}}>Kelas Kereta</Title>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Eksekutif" value="Eksekutif" />
                            <Picker.Item label="Bisnis" value="bisni" />
                            <Picker.Item label="Ekonomi" value="Ekonomi" />
                    </Picker>
                </Card.Content>
                
                <Card.Content style={{alignItems:'center'}}>
                    <Title style={{fontSize:17, fontWeight:'bold'}}>Penumpang</Title>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Bayi" value="bayi" />
                            <Picker.Item label="Dewasa" value="dewasa" />
                    </Picker>
                </Card.Content>
                </View>
                <Text style={{marginTop:20, marginLeft:10, fontSize:10, color:'grey'}}>Penumpang bayi tidak mendapatkan kursi sendiri</Text>
                <Button style={{backgroundColor:'orange', margin:10,  borderRadius:12, height:50}}>
                    <Text style={{color:'white', fontWeight:'bold', margin:10}}>Cari</Text>
                </Button>
            </Card>
        </>
    );
}

export default KAantarkota;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:'100%',
    },
    cardkaipay:{
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        height:80,
        width:'50%',
        backgroundColor:'white',
    },
    cardpoint:{
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        height:80,
        width:'50%',
        backgroundColor:'white',
    },
    kaipaypointlogo:{
        marginHorizontal:14, 
        marginVertical: 4, 
        height:50, 
        width:50
    }
});