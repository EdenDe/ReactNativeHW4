import { View,FlatList ,Text, StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FAB } from 'react-native-paper';

import Note from '../FComponents/Note';


var listTemp = [{id:1, title: "hw", details: "reactNative" }, {id:2, title: "Tali", details: "screens" }]

const Home = ({ navigation, route }) => {

  const [listDetails, SetList] = useState(listTemp);
  
  const [noteID, SetnoteID] = useState(listTemp.length+1)

  useEffect(()=>{

    if(route.params?.note)
    {
      let temp =[...listDetails, route.params?.note];
      console.log("listDetails",temp);
      SetList(temp)
      SetnoteID(prevC=> prevC+1 )
    }
  }, [route.params?.note]);

  const deleteNote=(id)=>{

    console.log("idToDelete",id)
    let temp = listDetails.filter(x=> x.id !== id);
    SetList(temp);
    console.log(temp);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlesBox}>
        <Text style={styles.titles}> Note Title </Text>
        <Text style={styles.titles}> Note Detail </Text>
      </View>
      <View style={styles.listBox}>
        <FlatList
          data={listDetails}
          renderItem={({item})=>(
            <Note deleteNote={deleteNote} id={item.id} title={item.title} details={item.details} />
          )}/>
            
      </View>
      <View style={{ height: "20%" }}>
        <FAB small icon="plus" style={styles.fabStyle} onPress={() => {
          navigation.navigate('AddNote',{noteID:noteID})
        }} />

      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  fabStyle: {
    position: 'absolute',
    right: "5%",
    bottom: "50%",
  },
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
  },
  titlesBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: "10%",
    alignItems: "flex-end",
  },
  titles: {
    width: "40%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  listBox: {
    display: "flex",
    flexDirection: "column",
    height: "60%",
    borderColor:"black",
    borderWidth: 1,
  },
});