import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Medications2({route}) {
    const {patientId, doscSpecialty} = route.params
    
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);
  const [date, setDate] = useState('')
  const [disease, setDisease] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
       
       
        const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/medications`);
        const data = await response.json();
        setList(data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleAddItem = async () => {
  
    
    try {
        const response = await fetch(`http://192.168.1.129:3000/doctorP/patients/${patientId}/medications/addMeds`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, disease: disease})
          });
      console.log(response)
      if (response.ok) {
       
        setList([...list, {name: name, disease: disease}]);
        setName('');
        setDisease('')
      } 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medications</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>Date:</Text>
            <Text style={styles.listItemText}>{item.date}</Text>
            <Text style={styles.listItemTitle}>Name:</Text>
            <Text style={styles.listItemText}>{item.name}</Text>
            <Text style={styles.listItemTitle}>Disease:</Text>
            <Text style={styles.listItemText}>{item.disease}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listContainer}
      />
      {(
        <View style={styles.form}>
          <Text style={styles.formTitle}>Add a New Medication</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the name of the Medication"
              placeholderTextColor="#979797"
              value={name}
              onChangeText={setName}
              required={true}
            />
         <Text style={styles.label}>Disease:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the name of the disease"
              placeholderTextColor="#979797"
              value={disease}
              onChangeText={setDisease}
              required={true}
            />
          </View>
          <TouchableOpacity onPress={handleAddItem} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
      }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14082b',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
      alignSelf: 'flex-start',
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingLeft: 10,
      marginBottom: 20,
      color: '#fff',
    },
    button: {
      backgroundColor: '#7C3AED',
      borderRadius: 30,
      width: 120,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    listContainer: {
      width: '100%',
    },
    listItem: {
      backgroundColor: '#1C1247',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
    },
    listItemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#7C3AED',
      marginBottom: 5,
    },
    listItemText: {
      fontSize: 16,
      color: '#fff',
    },
    form: {
      width: '100%',
      backgroundColor: '#1C1247',
      borderRadius: 8,
      padding: 20,
      marginTop: 20,
    },
    formTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#7C3AED',
      marginBottom: 10,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      color: '#7C3AED',
      fontSize: 16,
      marginBottom: 5,
    },
  });
