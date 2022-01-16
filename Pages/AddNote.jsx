import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const AddNote = ({ navigation, route }) => {

  const [noteTitle, SetNoteTitle] = useState();
  const [noteDetails, setNoteDetail] = useState();
  const noteID = route.params?.noteID;

  console.log(noteID)

  const AddAndReturn = () => {
  
    if((noteTitle || noteDetails) === undefined )
    {
      navigation.navigate({
        name: 'Home',
      });
    }
    else{
      let noteTemp = {
        id: noteID,
        title: noteTitle,
        details: noteDetails
      }
      navigation.navigate({
        name: 'Home',
        params: { note: noteTemp }
      });
    }
   
  }

  return (

    <View >
      <View style={{marginTop: 10}}>
        <View style={styles.rowS}>
          <Text style={styles.textS}> Note title: </Text>
          <TextInput onChangeText={noteTitle => SetNoteTitle(noteTitle)}
            defaultValue={noteTitle} style={styles.input} />
        </View>
        <View style={styles.rowS}>
          <Text style={styles.textS}> Note Detail: </Text>
          <TextInput onChangeText={noteDetails => setNoteDetail(noteDetails)}
            defaultValue={noteDetails} style={styles.input} />

        </View>
      </View>
      <View style={styles.flexBox}>
        <TouchableOpacity style={styles.btnBox} onPress={() => AddAndReturn()}>
          <Text style={styles.btnPlus} > + </Text>
        </TouchableOpacity>
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
    width: "60%",
    borderRadius:30
  },
  rowS: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnPlus: {
    padding: 30,
    fontSize: 30
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "lightblue",
    width: "30%",
    marginTop:50
  },
  // fabStyle2: {
  //   position: 'absolute',
  //   right: "30%",
  //   bottom: "70%",
  //   width: 100,  
  //   height: 100,   
  //   borderRadius: 50,  
  //   textAlign: 'center'          
  // },
  flexBox:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textS: {
    width: "30%",
    textAlign: "center",
  },

});

export default AddNote
