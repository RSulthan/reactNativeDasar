import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';

export default function LocalAPI() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');

  const [users, setUsers] = useState([]);

  const [button, setButton] = useState('Simpan');

  const [buttonReset, setButtonReset] = useState(false);

  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };
    if (button === 'Simpan') {
      console.log('data before send: ', data);
      Axios.post('http://192.168.100.6:3004/users', data).then(result => {
        console.log('res post data', result);
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(
        `http://192.168.100.6:3004/users/${selectedUser.id}`,
        data,
      ).then(res => {
        console.log('res update: ', res);
        getData();
      });
    }
  };

  const getData = () => {
    Axios.get('http://192.168.100.6:3004/users').then(res => {
      console.log('res get data', res);
      setUsers(res.data);
    });
  };

  const selectItem = item => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
    setButtonReset(true);
  };

  const batalUpdate = () => {
    setName('');
    setEmail('');
    setBidang('');
    setButtonReset(false);
    setButton('Simpan');
  };

  const onDelete = item => {
    console.log('item yang didelete: ', item);
    Axios.delete(`http://192.168.100.6:3004/users/${item.id}`).then(res => {
      console.log('res delete ', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text style={styles.textTitleA}>Masukkan Anggota Sulthan Coding</Text>
      <TextInput
        value={name}
        style={styles.textInput}
        placeholder="Nama Lengkap"
        onChangeText={value => setName(value)}
      />
      <TextInput
        value={email}
        style={styles.textInput}
        placeholder="Email"
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        value={bidang}
        style={styles.textInput}
        placeholder="Bidang"
        onChangeText={value => setBidang(value)}
      />
      <View style={styles.button}>
        <Button title={button} onPress={() => submit()} />
      </View>
      {buttonReset ? (
        <View style={styles.button}>
          <Button title="Batal Update" onPress={() => batalUpdate()} />
        </View>
      ) : (
        <View></View>
      )}
      <View style={styles.line} />
      {users.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            diTekan={() => selectItem(user)}
            diPencet={() =>
              Alert.alert('Peringatan', 'Anda yakin akan menghapus user ini?', [
                {text: 'Tidak', onPress: () => console.log('Button tidak')},
                {text: 'Ya', onPress: () => onDelete(user)},
              ])
            }
          />
        );
      })}
    </View>
  );
}

const Item = props => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={props.diTekan}>
        <Image
          source={{uri: `https://i.pravatar.cc/150?u=${props.email}`}}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{props.name}</Text>
        <Text style={styles.descEmail}>{props.email}</Text>
        <Text style={styles.descBidang}>{props.bidang}</Text>
      </View>
      <TouchableOpacity onPress={props.diPencet}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  textTitleA: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  line: {
    backgroundColor: 'black',
    height: 2,
    marginTop: 20,
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  button: {
    marginTop: 20,
  },
  desc: {
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  desc: {
    marginLeft: 18,
    marginTop: 2,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 12,
  },
});
