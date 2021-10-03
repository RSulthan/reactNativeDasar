import React, {Component, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.textTitleA}>Componen State Hooks</Text>
      <Text style={styles.textNumber}>{number}</Text>
      <View style={styles.styleButton}>
        <Button title="Tambah" onPress={() => setNumber(number + 1)} />
      </View>
      <View>
        <Button title="Reset" onPress={() => setNumber(0)} />
      </View>
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <View>
        <Text style={styles.textTitleA}>Componen State Class</Text>
        <Text style={styles.textNumber}>{this.state.number}</Text>
        <View style={styles.styleButton}>
          <Button
            title="Tambah"
            onPress={() => this.setState({number: this.state.number + 1})}
          />
        </View>
        <View>
          <Button title="Reset" onPress={() => this.setState({number: 0})} />
        </View>
      </View>
    );
  }
}

export default function StateDinamis() {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Text style={styles.textTitle}>Materi Komponen State Dinamis</Text>
        <Counter />
        <Counter />
        <CounterClass />
        <CounterClass />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  textTitleA: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
  },
  textNumber: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  styleButton: {
    marginBottom: 20,
  },
});
