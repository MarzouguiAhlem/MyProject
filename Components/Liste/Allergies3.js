import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';


export default function Allergies3({route}) {
    const {email} = route.params
    console.log(email)
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
 
  
  useEffect(() => {
    async function fetchData() {
      try {
     
       
        const response = await fetch(`http://192.168.42.7:3000/profile/${email}/allergie`);
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Allergies</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>Name:</Text>
            <Text style={styles.listItemText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.listContainer}
      />
     
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

  


