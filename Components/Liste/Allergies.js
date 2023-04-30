import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
export default function Allergies() {
  const [inputText, setInputText] = useState('');
  const [list, setList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const patientId = decodedToken['sub'];
        
        const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/allergies`);
        const data = await response.json();
        console.log(data)
        setInputText(data['allergies'])
       
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  const handleAddItem = async () => {
    const token = await AsyncStorage.getItem('token');
    
    const decodedToken = jwtDecode(token);
     const Id = decodedToken['sub'];
    const response = await fetch(`http://192.168.1.129:3000/auth/check/${Id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Id)
    });
    if(response.ok){
      setList([...list, inputText]);
      setInputText('');
    }
    else {
      console.log("Unauthorized!")
    }
    
    
  };

  return (
    <View style={style.container}>
      <Text style={style.text1} >Allergies</Text>
      <TextInput
        placeholder="You can add an Allergie to the list"
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
    backgroundColor: '#14082b'
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

