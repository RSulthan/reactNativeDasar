import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BasicJavascript() {
  // primitive
  const nama = 'Sulthan Rafif'; // String
  let usia = 24; // Number
  const apakahLakiLaki = true; // boolean

  // complex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'Kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  };

  // Function
  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`);
  };
  sapaOrang('Rafif', 22);

  // Array
  const namaOrang = ['Sulthan', 'Rafif', 'Andra', 'Dody', 'Anisah', 'Mellano']; // object -array

  typeof namaOrang; // object

  // Jika hujan turun, bawa payung.
  // Jika perut lapar, maka makan.

  //   if (hewanPeliharaan.nama === 'Miaw') {
  //     console.log('Hello Miaw');
  //   } else {
  //     console.log('Hewan siapa ini?');
  //   }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hello Miaw, apa kabar?';
    // } else {
    //   hasilSapa = 'Ini hewan siapa?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? 'Hallow Miaw, apa kabar?'
      : 'Ini hewan siapa?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Basic Javascript</Text>
      <Text>Name: {nama}</Text>
      <Text>Age: {usia}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text key={namaOrang[0]}>{namaOrang[0]}</Text>
      <Text key={namaOrang[1]}>{namaOrang[1]}</Text>
      <Text key={namaOrang[2]}>{namaOrang[2]}</Text>
      <Text>=========================</Text>
      {namaOrang.map(orang => (
        <Text key={orang}>{orang}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
