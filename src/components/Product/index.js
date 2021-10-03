import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/img/macbook.jpg';

export default function Product(props) {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={macbook} style={{width: 180, height: 175}} />
        <Text style={styles.textTitle}>New Macbook Pro 2019</Text>
        <Text style={styles.textPrice}>Rp. 25.000.000</Text>
        <Text style={styles.textProduct}>Mantap Jiwa</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textBeli}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 205,
    borderRadius: 8,
    marginLeft: 20,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black',
  },
  textPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'salmon',
  },
  textProduct: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    marginTop: 20,
    borderRadius: 25,
  },
  textBeli: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
