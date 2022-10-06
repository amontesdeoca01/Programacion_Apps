import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Button, Alert } from "react-native";

const Separator = () => (
  <View style={page.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={page.container}>
    <View>
      <Image
          style={page.tinyLogo}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
      <Text style={flattenStyle}>React Native</Text>
      <Text>Estilo:</Text>
      <Text style={page.code}>
        {JSON.stringify(flattenStyle, null, 2)}
      </Text>
    </View>

    <Separator />

    <View style={page.fixToText}>
    <Button
        title="Left button"
        onPress={() => Alert.alert('Izquierda')}
      />
      <Button
        title="Right button"
        onPress={() => Alert.alert('Derecha')}
      />
    </View>

    <View style={page.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={modalCSS.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalCSS.centeredView}>
          <View style={modalCSS.modalView}>
            <Text style={modalCSS.modalText}>Mostrando la modal!</Text>
            <Pressable
              style={[modalCSS.button, modalCSS.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalCSS.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalCSS.button, modalCSS.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalCSS.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const modalCSS = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#4169e1",
  },
  buttonClose: {
    backgroundColor: "#4169e1",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#E8F7F4",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#05C3DD"
  },
  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius:25,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const typography = StyleSheet.create({
  header: {
    color: "#05C3DD",
    fontSize: 30,
    marginBottom: 36,
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);


export default App;