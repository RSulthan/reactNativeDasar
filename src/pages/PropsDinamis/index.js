import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 70 / 2,
        }}
      />
      <Text style={{maxWidth: 50, textAlign: 'center', fontSize: 12}}>
        {props.title}
      </Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>Props Dinamis</Text>
      <ScrollView horizontal>
        <View
          style={{
            flexDirection: 'row',
            //   justifyContent: 'space-around'
          }}>
          <Story
            title="Story"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/156595512_517494202576308_7265773608127927974_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=k4VmgvEDETsAX80n4uZ&edm=ANmP7GQBAAAA&ccb=7-4&oh=593f0d73033ea4d41c6b88f44c2476ba&oe=61601885&_nc_sid=276363"
          />
          <Story
            title="MTV Kutang"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/156665234_184975066432444_8475090533872585271_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=104&_nc_ohc=awm-7tvLYNkAX8E1EkU&edm=AGW0Xe4BAAAA&ccb=7-4&oh=5307cb21d8fd246a97f1ae321bce9ea9&oe=6160E77D&_nc_sid=acd11b"
          />
          <Story
            title="Mantab Jiwa"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/157309961_1859644024176655_5774756849764422004_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=gfXxwdCOPIwAX-QeBxf&edm=AGW0Xe4BAAAA&ccb=7-4&oh=d282224cd2c4cd0b80075e0d1800208a&oe=616075D7&_nc_sid=acd11b"
          />
          <Story
            title="Keren Bingitz"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/156915056_337040017718684_385984480130726799_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=-oL0UApdI6oAX_kbfXi&edm=AGW0Xe4BAAAA&ccb=7-4&oh=f834c6f3f586a3233f5dd663e95aaa97&oe=616012AC&_nc_sid=acd11b"
          />
          <Story
            title="Peace Love and Gaul"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/158153113_268119601487806_4782928978418262100_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=110&_nc_ohc=D4xO03ptOzkAX95j0y3&edm=AGW0Xe4BAAAA&ccb=7-4&oh=9a1ef0c13ac6125af87209c094d72dd8&oe=615FBE03&_nc_sid=acd11b"
          />
          <Story
            title="MTV Bujang"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/156873842_962218424311268_1912617783777885966_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=108&_nc_ohc=WjGpEFHBsHIAX__KGjf&edm=AGW0Xe4BAAAA&ccb=7-4&oh=d1a55b17d1237bbaa5ecd4025ba4d38a&oe=61607389&_nc_sid=acd11b"
          />
          <Story
            title="MTV Alay"
            image="https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/s150x150/157430187_113607417448488_4137464134987363088_n.jpg?_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=fghmTzC4tm4AX_rfvtg&edm=AGW0Xe4BAAAA&ccb=7-4&oh=8658981d4e9173c11ceddb8b18e07868&oe=615F86E2&_nc_sid=acd11b"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
