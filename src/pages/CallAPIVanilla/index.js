import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {create} from 'react-test-renderer';

export default function CallAPIVanilla() {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // Call API Method GET (Secara DEFAULT tanpa OPTIONS)
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // Call API Method POST
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object: ', dataForAPI);
    // console.log('data stringify: ', JSON.stringify(dataForAPI));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('post response: ', json);
    //   });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };
  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response: ', json);
        setDataJob(json);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>
      <Tombol title="GET DATA" label="Response GET DATA" diTekan={getData} />
      <View style={styles.viewData}>
        <Profile
          avatar={dataUser.avatar}
          firstName={dataUser.first_name}
          lastName={dataUser.last_name}
          email={dataUser.email}
        />
      </View>
      <View style={styles.line} />
      <Tombol title="POST DATA" label="Response POST DATA" diTekan={postData} />
      <View style={styles.viewData}>
        <BuatData getName={dataJob.name} getJob={dataJob.job} />
      </View>
    </View>
  );
}

const BuatData = props => {
  return (
    <View>
      <Text>{props.getName}</Text>
      <Text>{props.getJob}</Text>
    </View>
  );
};

const Profile = props => {
  return (
    <View>
      <Image style={styles.avatar} source={{uri: props.avatar}} />
      <Text>{`${props.firstName} ${props.lastName}`}</Text>
      <Text>{props.email}</Text>
    </View>
  );
};

const Tombol = props => {
  return (
    <View>
      <View style={styles.button}>
        <Button title={props.title} onPress={props.diTekan} />
      </View>
      <Text style={styles.textTitleA}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  textTitleA: {
    textAlign: 'center',
    marginTop: 20,
  },
  line: {
    backgroundColor: 'black',
    height: 2,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  viewData: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
