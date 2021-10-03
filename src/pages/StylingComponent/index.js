import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import macbook from '../../assets/img/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <ScrollView>
        <JudulDaftar />
        <StylingReactNativeComponent />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

const JudulDaftar = () => {
  return <Text style={styles.text}>Daftar Harga Macbook</Text>;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 205,
          borderRadius: 8,
          marginLeft: 20,
        }}>
        <Image source={macbook} style={{width: 180, height: 175}} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'black',
          }}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'salmon',
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            marginTop: 12,
            color: 'black',
          }}>
          Mantap Jiwa
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            marginTop: 20,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'salmon',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StylingComponent;
