import React, {Component, useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default class CallAPI extends Component {
  state = {
    people: [],
    dataBaru: [],
  };

  componentDidMount() {
    console.log('Component Did Mount');
  }

  getData() {
    console.log('Fungsi Get Data');
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => {
        console.log('Data Banyak Orang Get Data', json);
        this.setState({
          people: json.data,
        });
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  }

  postData() {
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
        this.setState({
          dataBaru: json,
        });
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>
        <Tombol
          title="GET DATA"
          label="Response GET DATA"
          diTekan={() => this.getData()}
        />
        <ScrollView>
          <View style={styles.viewData}>
            {this.state.people.map(orang => (
              <Profile
                key={orang.id}
                avatar={orang.avatar}
                firstName={orang.first_name}
                lastName={orang.last_name}
                email={orang.email}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.line} />
        <Tombol
          title="POST DATA"
          label="Response POST DATA"
          diTekan={() => this.postData()}
        />
        <BuatData
          getName={this.state.dataBaru.name}
          getJob={this.state.dataBaru.job}
        />
      </View>
    );
  }
}

// export default function CallAPIVanilla() {
//   const [dataUser, setDataUser] = useState({
//     avatar: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//   });

//   const [dataJob, setDataJob] = useState({
//     name: '',
//     job: '',
//   });

//   useEffect(() => {

//   }, []);

//   const getData = () => {
//     fetch('https://reqres.in/api/users')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         setDataUser(json.data[4]);
//       });
//   };
//   const postData = () => {
//     const dataForAPI = {
//       name: 'morpheus',
//       job: 'leader',
//     };

//     fetch('https://reqres.in/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(dataForAPI),
//     })
//       .then(response => response.json())
//       .then(json => {
//         console.log('post response: ', json);
//         setDataJob(json);
//       });
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textTitle}>Call API dengan VanillaJS</Text>
//       <Tombol title="GET DATA" label="Response GET DATA" diTekan={getData} />
//       <View style={styles.viewData}>
//         <Profile
//           avatar={dataUser.avatar}
//           firstName={dataUser.first_name}
//           lastName={dataUser.last_name}
//           email={dataUser.email}
//         />
//       </View>
//       <View style={styles.line} />
//       <Tombol title="POST DATA" label="Response POST DATA" diTekan={postData} />
//       <View style={styles.viewData}>
//         <BuatData getName={dataJob.name} getJob={dataJob.job} />
//       </View>
//     </View>
//   );
// }

const BuatData = props => {
  return (
    <View style={styles.viewData}>
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
