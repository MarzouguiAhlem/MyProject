import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';



export default function FamilyMedicine() {

const [list, setList] = useState([]);
const [DV, setDV] = useState('');

const handleAddItem = () => {
    setList([...list, DV]);
    setDV('');
   };

  return (
 
<View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the Date and your report"
        placeholderTextColor="gray"
        value={DV}
        onChangeText={setDV}
        color="white"
        required={true}
        multiline={true}
        numberOfLines={20}

      />    
<TouchableOpacity onPress={handleAddItem} style={{borderRadius: 5,
    backgroundColor: "white",
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
    borderColor: 'white',
    borderRadius: 4,
    paddingLeft: 16,
    marginTop: 35,
  },
  text1: {
    fontSize: 30,
    color: 'white' ,
    padding: 8,
    margin: 10,
},
listeText: {
  fontSize: 16,
  color: 'black' ,
  padding: 8,
  margin: 10,
  backgroundColor: 'white',
},

}); 