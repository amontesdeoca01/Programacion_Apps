import React from 'react'
import { View, text, StyleSheet, Button } from 'react-native';

const Productos = (props) => {
  return (
    <View>
        <Button title='Agregar producto' onPress={ () => props.navigation.navigate('productos_add')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Productos;