import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './components/config';

export default function App() {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');


  function createData() {

    // const newKey = push(child(ref(database), 'users')).key;

    set(ref(db, 'users/' + username), {
      username: username,
      email: email
    }).then(() => {
      // Data saved successfully!
      alert('data updated!');
    })
      .catch((error) => {
        // The write failed...
        alert(error);
      });
  }

  function update() {

    // const newKey = push(child(ref(database), 'users')).key;

    update(ref(db, 'users/' + username), {
      username: username,
      email: email
    }).then(() => {
      // Data saved successfully!
      alert('data updated!');
    })
      .catch((error) => {
        // The write failed...
        alert(error);
      });


  };

  function readData() {

    const starCountRef = ref(db, 'users/' + username);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setEmail(data.email);

    });

  }

  function deleteData() {

    remove(ref(db, 'users/' + username));
    alert('removed');
  }

  return (
    <View style={styles.container}>
      <Text>Firebase crud!</Text>

      <TextInput value={username} onChangeText={(username) => { setName(username) }} placeholder="Username" style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => { setEmail(email) }} placeholder="Email" style={styles.textBoxes}></TextInput>

      {/* <button onClick={createData}>Submit Data </button> */}
        <TouchableOpacity
            onPress={ createData }
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});