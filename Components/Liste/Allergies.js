import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Allergies = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleSubmit = () => {
    // Do something with the text value, such as send it to a server or update state
    console.log(text);
  };

  return (
     <View style={style.container}>
      <TextInput
       multiline={true}
       numberOfLines={6}
        placeholder="Enter text"
        onChangeText={handleTextChange}
        value={text}
        style={style.text}
      />
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Submit</Text>
      </TouchableOpacity>
      
    </View>
);
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white'
  },
  
  button: {
  backgroundColor: '#14082b',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 18,
  },
  text: {
    color: '#14082b',
    fontSize: 18,
    backgroundColor:'white',
    width: '90%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#c2bccf',
    height: 100,
    padding: 10,
    margin: 15,
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',

  },
})

export default Allergies;