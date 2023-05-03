import React, { useState, useEffect } from 'react';
  import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import jwtDecode from 'jwt-decode';
  
  export default function Gastroenterology() {
  
    const [list, setList] = useState([]);
    const [description, setDescription] = useState('');
    const [user, setUser] = useState(null);
    const [date, setDate] = useState('')
    const [name, setName] =  useState('')
  
    useEffect(() => {
      async function fetchData() {
        try {
          const token = await AsyncStorage.getItem('token');
          const decodedToken = jwtDecode(token);
          const patientId = decodedToken['sub'];
         
          const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/specialties/Gastroenterology/MedicalFiles`);
          const data = await response.json();
          setList(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, []);
  
    const handleAddItem = async () => {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const id = decodedToken['sub'];
      
      try {
        const response = await fetch(`http://192.168.1.129:3000/auth/check/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(id)
        });
        
        const data = await response.json();
        setUser(data);
        
        if (response.ok) {
          const newItem = { description: description, date: date, name: name };
          setList([...list, newItem]);
          setName('');
        } else {
          console.log('Unauthorized!');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gastroenterology Reports</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
               <Text style={[styles.listItemTitle, {color: '#7C3AED'}]}>Date:</Text>
              <Text style={[styles.listItemText, {color: '#fff'}]}>{item.date}</Text>
              <Text style={[styles.listItemTitle, {color: '#7C3AED'}]}>Name:</Text>
              <Text style={[styles.listItemText, {color: '#fff'}]}>{item.name}</Text>
              <Text style={[styles.listItemTitle, {color: '#7C3AED'}]}>Description:</Text>
              <Text style={[styles.listItemText, {color: '#fff'}]}>{item.description}</Text>
             
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.listContainer}
        />
        {user && user.role === 'DOCTOR' && ( // Only render the input and button for doctors
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Description:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the name of the Vaccination"
                placeholderTextColor="#979797"
                value={name}
                onChangeText={setName}
                required={true}
              />
               <Text style={styles.label}>Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the date of the Vaccination"
                placeholderTextColor="#979797"
                value={date}
                onChangeText={setDate}
                required={true}
              />
               <Text style={styles.label}>Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the date of the Vaccination"
                placeholderTextColor="#979797"
                value={description}
                onChangeText={setDescription}
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
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
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
      marginTop: 20,
    },
    listItem: {
      backgroundColor: '#14082b',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
    },
    listItemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    listItemText: {
      fontSize: 16,
    },
    listItemDate: {
      color: '#7C3AED',
      marginBottom: 5,
    },
  });