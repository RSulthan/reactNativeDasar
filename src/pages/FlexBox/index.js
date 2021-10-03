import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            //   flex: 1,
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri: 'https://yt3.ggpht.com/yti/APfAmoE-O-ifmXBA2Eqy8QvdLaSx3HaMt04k1i6OF_I9PQ=s108-c-k-c0x00ffffff-no-rj',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 14,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Sulthan Rafif
            </Text>
            <Text>1 Juta subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
