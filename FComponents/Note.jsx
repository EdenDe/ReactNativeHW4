import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Note = ({id, title, details,deleteNote}) => {
  return (
    <View style={styles.flex}>
      <TouchableOpacity title="X" style={styles.detete1} onPress={()=>deleteNote(id)}>
        <Text> X </Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}> {title}  </Text>
      <Text style={styles.textStyle}>  {details} </Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  detete1: {
    color: "red",
    width: "20%",
    textAlign: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-end",
    borderColor:"black",
    borderWidth: 1,
    padding:10   
  },
  textStyle: {
    width: "40%",
    textAlign: "center",
  }
})