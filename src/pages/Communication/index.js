import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function Communication() {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Communication</Text>
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
      <Cart qty={totalProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center'},
  textTitle: {textAlign: 'center', fontSize: 20},
});
