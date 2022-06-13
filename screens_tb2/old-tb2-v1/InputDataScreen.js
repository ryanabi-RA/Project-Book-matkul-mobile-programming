import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Appbar, Card, TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import NotFoundScreen from './NotFoundScreen';
import supabase from '../supabase';

function InputDataScreen({ navigation, route }) {
    const [data, setData] = useState([]);
    const [namaCustomer, setNamaCustomer] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [pembayaran, setPembayaran] = useState(false);
    const [digunakan, setDigunakan] = useState(false);
    const [user, setUser] = useState('1');
    // const [jadwal, setJadwal] = useState('');

    const jadwal = route.params.id;
    const asal = route.params.asal;z
    const tujuan = route.params.tujuan;
    const kodeKereta = route.params.kodeKereta;
    const kelas = route.params.kelas;
    const tanggal = route.params.tanggal;
    const harga = route.params.harga;
    const dewasa = route.params.dewasa;
    const bayi = route.params.bayi;

    useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        //data : hasil query, error : pesan error
        const { data, error } = await supabase
            .from('jadwal_rute_perjalanan')
            .select('*, kereta:kode_kereta(nama_kereta), kota_asal:id_kota_asal(nama_kota_asal), kota_tujuan:id_kota_tujuan(nama_kota_tujuan)')
            .eq('id_jadwal', route.params.id)
        // .eq('kota_asal.nama_kota_asal', 'jakarta')
        // .eq('tanggal_perjalanan', '2022-06-01 ')
        // .match({ id_kota_asal: idKotaAsal, id_kota_tujuan: idKotaTujuan })
        // .order('id_jadwal', { ascending: true });
        //mengisi state data
        setData(data);
        // setJadwal(data.id_jadwal);
    }


    const countDate = (a) => {
        let number = a + 1;
        if (number < 10) {
            return '0' + number.toString();
        }
        return number;
    }


    const onSimpan = async () => {
        const { data, error } = await supabase
            .from('ticket')
            .insert({
                id_user: user,
                id_jadwal: jadwal,
                kode_kereta: kodeKereta,
                id_kota_asal: asal,
                id_kota_tujuan: tujuan,
                nama_customer: namaCustomer,
                no_telp_customer: noTelp,
                tanggal_tiket: tanggal,
                kelas_kereta: kelas,
                harga_tiket: harga,
                status_pembayaran: pembayaran,
                status_digunakan: digunakan,
                dewasa: dewasa,
                bayi: bayi,
            });
        console.log(error);
        // Alert("Pesan", "Data berhasil disimpan");
        navigation.goBack();
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Pesan Tiket" color='white' />
            </Appbar.Header>
            {/* <NotFoundScreen /> */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View key={index}>
                        <Card style={{ margin: 10, borderRadius: 8 }}>
                            <Text>No id : {item.id_jadwal}</Text>
                            <Text>tanggal : {tanggal}</Text>
                            <Text>kelas : {kelas}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={
                                    {
                                        margin: 10,
                                        color: 'blue',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        width: '50%'
                                    }
                                }>{item.kereta.nama_kereta}</Text>
                                <Text style={
                                    {
                                        margin: 10,
                                        width: '40%',
                                        textAlign: 'right',
                                        color: 'blue',
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                    }
                                }>Rp.{item.harga}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        width: '50%',
                                        margin: 10,
                                        textAlign: 'left'
                                    }}>{item.kota_asal.nama_kota_asal}
                                </Text>
                                <Text style={{
                                    width: '40%',
                                    margin: 10,
                                    textAlign: 'right'
                                }}>{item.kota_tujuan.nama_kota_tujuan}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        width: '33.3%',
                                        marginLeft: 10,
                                        textAlign: 'left',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: 'blue'
                                    }}>{item.jam_keberangkatan}
                                </Text>
                                <Text style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    width: '33.3%',
                                    textAlign: 'center'
                                }}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
                                <Text style={{
                                    width: '25%',
                                    marginLeft: 10,
                                    textAlign: 'right',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'blue'

                                }}>{item.jam_sampai}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ width: '50%', margin: 10 }}>{item.tanggal_perjalanan}</Text>
                                <Text style={{ width: '40%', margin: 10, textAlign: 'right', }}>{item.tanggal_perjalanan.toString().slice(0, 8)}{countDate(parseFloat(item.tanggal_perjalanan.toString().slice(8)))}</Text>
                            </View>
                        </Card>
                        <Card style={{ margin: 10, borderRadius: 8, }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'blue',
                                marginVertical: 10,
                            }}>Input data diri</Text>
                            <TextInput
                                style={{ margin: 5, }}
                                label="namaCustomer"
                                placeholder={'Nama'}
                                value={namaCustomer}
                                onChangeText={text => setNamaCustomer(text)}
                            />
                            <TextInput
                                style={{ margin: 5, }}
                                label="noTelp"
                                placeholder={'No Telp'}
                                value={noTelp}
                                onChangeText={text => setNoTelp(text)}
                            /><TouchableOpacity
                                style={{ backgroundColor: 'orange', margin: 10, borderRadius: 12, height: 50, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => onSimpan()}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold', margin: 10, fontSize: 20, }} >Beli</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                )}
            />

        </>
    );
}

export default InputDataScreen;