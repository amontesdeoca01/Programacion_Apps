import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './components/config'; 
import { useNavigation } from "@react-navigation/native";


const Create = () => {

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

  return (
    <View style={styles.container}>
      <Text>Update user</Text> 

      <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Username" style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>

      {/* <button onClick={deleteData}>Submit Data </button> */}
      <TouchableOpacity
            onPress={ createData }
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Submit</Text>
        </TouchableOpacity>

    </View>
  );  
}

export default Create

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