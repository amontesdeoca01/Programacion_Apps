import React, {useState} from "react";
import { StyleSheet, View, Button, ScrollView, Alert } from "react-native";
import { Input } from 'react-native-elements';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './db/firebase_config';

export default function App(){

  const [data, setData] = useState({
    username: "",
    email: "",
    psw: "",
    createdAt: new Date(),
  })

  const changeText = (key, value) => {
    setData({...data, [key]: value});
  }

  const Agregar = () =>{
    if(data.psw != data.psw2){
      Alert.alert('La contraseña debe de coincidir...!')
    }else if(data.username == '' || data.email == ''){
      Alert.alert('Nombre de usuario y/o email, son obligatorios.!')
    }else{
      onSend(data);
    }
  }

  const onSend = async () => {
    const docRef = await addDoc(collection(db, 'usuarios'), data);
  }

  // const oneUsersDB = async () => {
  //   const docRef = doc(db, "usuarios", 'muchas letras supongo que es pa la conexion');
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data: ", docSnap.data());
  //   }else{
  //     console.log("No such document!");
  //   }
  // };

  const allUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => " , doc.data());
    });
  }

  return(

    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View>
        <Input placeholder='Nombre de usuario' style={styles.input} onChangeText={(value) => changeText('username', value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder='Correo electrónico' style={styles.input} onChangeText={(value) => changeText('email', value)}/>
      </View>
      <View>
        <Input placeholder='Contraseña' style={styles.input} onChangeText={(value) => changeText('psw', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Button
          onPress={() => {
            Agregar()
          }}
          title="Enviar datos"
          color="841584"
          />
      </View>
      <View>
        <Button
          onPress={() => {
            allUsers()
          }}
          title="Ver datos"
          color="841584"
          />
      </View>
    </ScrollView>
  );

}
