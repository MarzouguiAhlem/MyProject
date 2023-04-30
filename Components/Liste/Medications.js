import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';



export default function Medications() {

 
  const [list, setList] = useState([]);

  const [DDM, setDDM] = useState('');


  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [disease, setDisease] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const patientId = decodedToken['sub'];
        
        const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/medications`);
        const data = await response.json();
        console.log(data)
        setList(data);  // update list with fetched data
       
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
     
      setList([...list, {date: date, name: name, disease: disease}]); // update list with the new vaccination
      setDate(''); // reset date input
      setName(''); // reset name input
      setDisease('')
    }
    else {
      console.log("Unauthorized!")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Medications</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.listeText}>Date: {item.date}</Text>
            <Text style={styles.listeText}>Name: {item.name}</Text>
            <Text style={styles.listeText}>disease: {item.disease}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{flex: 1, width: '100%'}}
      />
      <Text style={styles.text1}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the Date of the vaccination"
        placeholderTextColor="gray"
        value={date}
        onChangeText={setDate}
        color="white"
        required={true}
        multiline={true}
        numberOfLines={10}
      />
      <Text style={styles.text1}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name of vaccination"
        placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
        color="white"
        required={true}
        multiline={true}
        numberOfLines={10}
      /> 
       <Text style={styles.text1}>Disease</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name of Disease"
        placeholderTextColor="gray"
        value={name}
        onChangeText={setDisease}
        color="white"
        required={true}
        multiline={true}
        numberOfLines={10}
      /> 
      <TouchableOpacity onPress={handleAddItem} style={styles.button}>
        <Text style={{ color: '#14082b', fontSize: 18, fontWeight:'bold' }}>Submit</Text>
      </TouchableOpacity>
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




