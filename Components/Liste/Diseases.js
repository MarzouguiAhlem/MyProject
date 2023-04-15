import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function Diseases() {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);

  const handleAddItem = () => {
    setList([...list, inputText]);
    setInputText('');
  };

  return (
    <View style={style.container}>
      <Text style={style.text1} >Diseases</Text>
      <TextInput
        placeholder="You can add a disease to the list"
        onChangeText={text => setInputText(text)}
        value={inputText}
        multiline={true}
        numberOfLines={10}
        style={style.text}
      />
       <TouchableOpacity onPress={handleAddItem} style={style.button}>
        <Text style={style.itemText}>Add</Text>
      </TouchableOpacity>
    
      <FlatList
        data={list}
        renderItem={({ item }) => <Text style={style.listeText} >{item}</Text>}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'white'
  },
  
  button: {
  backgroundColor: '#c2bccf',
    borderRadius: 10,
    padding: 10,
   marginHorizontal: 18,
   width: '90%',
  },
  text: {
    color: '#14082b',
    fontSize: 18,
    backgroundColor:'white',
    width: '90%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#c2bccf',
    height: 80,
    padding: 10,
    margin: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#14082b',
    textAlign: 'center',
  },
  listeText: {
    fontSize: 16,
  color: 'black' ,
  padding: 8,
  margin: 10,
  backgroundColor: 'white',
  },
  text1: {
    fontSize: 30,
    color: 'white' ,
    padding: 8,
    margin: 10,

  }
})
