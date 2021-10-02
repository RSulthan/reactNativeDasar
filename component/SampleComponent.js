import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'salmon'}} />
      <Text>Sulthan Rafif</Text>
      <Pekerjaan />
      <Photo />
      <TextInput style={{borderWidth: 1}} placeholder="Ini Text Input" />
      <BoxGreen />
      <Box />
      <Profile />
    </View>
  );
};

const Pekerjaan = () => {
  return (
    <View>
      <Text>Gamer Professional, Programmer</Text>
      <Text>Your future husband, for girl</Text>
    </View>
  );
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

const Box = () => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'salmon',
        borderWidth: 2,
        borderColor: 'blue',
        marginTop: 20,
        marginLeft: 20,
      }}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Component Class BoxGreen</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Image
          source={{uri: 'http://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100}}
        />
        <Text style={{color: 'salmon', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
