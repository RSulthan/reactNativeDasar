import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gaming from '../../assets/svg/gaming.svg';

export default function ReactNativeSVG() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Menggunakan File SVG didalam React Native
      </Text>
      <Gaming width={244} height={125} style={styles.svgStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  svgStyle: {
    // position: 'absolute',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
