import React, { useState,useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FAB } from 'react-native-paper';

const AddNote = ({ navigation, route }) => {

  const [noteTitle, SetNoteTitle] = useState();
  const [noteDetails, setNoteDetail] = useState();
  const noteID = route.params?.noteID;

  console.log(noteID)

  const AddAndReturn = () => {

    let noteTemp = {
      id: noteID,
      title: noteTitle,
      details: noteDetails
    }
    navigation.navigate({
      name:'Home',
      params: { note: noteTemp }
    });
  }

  return (
    <View>
      <Text style={styles.textS}> Note title: </Text>
      <TextInput onChangeText={noteTitle => SetNoteTitle(noteTitle)}
        defaultValue={noteTitle} style={styles.input} />

      <Text style={styles.textS}> Note Detail: </Text>
      <TextInput onChangeText={noteDetails => setNoteDetail(noteDetails)}
        defaultValue={noteDetails} style={styles.input} />


      <View style={{ height: "20%" }}>
        <FAB large icon="plus" style={styles.fabStyle2} onPress={() => AddAndReturn()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%"
  },
  fabStyle2: {
    position: 'absolute',
    right: "20%",
    bottom: "10%",

  },
  textS: {
    color: "green"
  }
});

export default AddNote
