import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ProfilePat() {
  const Items = [
    { name: 'Basic information', screen: 'BasicInformation' },
    { name: 'Diseases', screen: 'Diseases' },
    { name: 'Allergies', screen: 'Allergies' },
    { name: 'Vaccination', screen: 'Vaccination' },
    { name: 'Medical Specialties', screen: 'MedicalSpecialties' },
    { name: 'Doctors', screen: 'Doctors' },
    { name: 'Medications', screen: 'Medications' },
    { name: 'ChatBox', screen: 'ChatboxPat' },
    
  ];

                                                                                            
  const navigation = useNavigation();
  const onPress1 = async () => {    
    const token = await AsyncStorage.getItem('token');

    const response = await fetch('http://192.168.1.129:3000/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json'
      },
     
    });
    console.log(response)
    if(response.ok){
      navigation.navigate("Welcome")
    }
    else{
      console.log("logout failed")
      return
    }
  }                                                                                   
  const renderItem = ({ item }) => (
    <Item name={item.name} onPress={() => navigation.navigate(item.screen)} />
  );

  const Item = ({ name, onPress }) => (
    <View style={menuStyles.innerContainer}>
      <TouchableOpacity style={menuStyles.button} onPress={onPress}>
        <Text style={menuStyles.itemText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={menuStyles.container}>

      <FlatList data={Items} renderItem={renderItem} />
      <TouchableOpacity style={menuStyles.button} onPress={onPress1}>
        <Text style={menuStyles.itemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53599A',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#14082b',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});
