import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';



export default function Medications() {

 
  const [list, setList] = useState([]);

  const [DDM, setDDM] = useState('');


  const handleAddItem = () => {
    setList([...list, DDM]);
    setDDM('');
   
  };

 return (
   <View style={styles.container}>
      <Text style={styles.text1} >Medications</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the Date, the Disease and the Medications"
        placeholderTextColor="gray"
        value={DDM}
        onChangeText={setDDM}
        color="white"
        required={true}
        multiline={true}
        numberOfLines={10}
        />
     
    
<TouchableOpacity onPress={handleAddItem} style={{borderRadius: 5,
    backgroundColor: "#c2bccf",
    padding: 5,
    height: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  }
  }>
      <Text style={{ color: '#14082b', fontSize: 18, fontWeight:'bold' }}>Submit</Text>
  </TouchableOpacity>

  <FlatList
        data={list}
        renderItem={({ item }) => <Text style={styles.listeText} >{item}</Text>}
      />
    </View>
    
  );}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14082b',
  },
  input: {
    width: '90%',
    height: 78,
    borderWidth: 1.5,
    borderColor: '#c2bccf',
    borderRadius: 4,
    paddingLeft: 10,
    marginTop: 18,
  
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

}); 




