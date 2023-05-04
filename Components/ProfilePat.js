import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfilePat() {
  const Items = [
    { name: 'Basic Information', screen: 'BasicInformation' },
    { name: 'Diseases', screen: 'Diseases' },
    { name: 'Allergies', screen: 'Allergies' },
    { name: 'Vaccination', screen: 'Vaccination' },
    { name: 'Medical Specialties', screen: 'MedicalSpecialties' },
    { name: 'Doctors', screen: 'Doctors' },
    { name: 'Medications', screen: 'Medications' },
    { name: 'ChatBox', screen: 'ChatboxPat' },
    { name: 'Logout', screen: 'Welcome' },
  ];

  const navigation = useNavigation();

  const onPressLogout = async () => {    
    const token = await AsyncStorage.getItem('token');
    const response = await fetch('http://192.168.1.129:3000/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json'
      },
    });
    
    if (response.ok) {
      navigation.navigate("Welcome")
    } else {
      console.log("Logout failed")
      return
    }
  }                                                                                   

  const renderItem = ({ item }) => {
    // Check for the Logout item and render the Logout button accordingly
    if (item.name === 'Logout') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={onPressLogout}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    return <Item name={item.name} onPress={() => navigation.navigate(item.screen)} />;
  };
  
  const Item = ({ name, onPress }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={[styles.button, { height: 60, borderRadius: 50 }]} onPress={onPress}>
        <Text style={[styles.itemText, { fontSize: 24 }]}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Profile</Text>
      <FlatList data={Items} renderItem={renderItem} />
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
      width: '100%',
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
      fontSize: 30,
      fontWeight: 'bold',
      color: '#7C3AED',
      marginBottom: 5,
    },
    listItemText: {
      fontSize: 30,
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
  
