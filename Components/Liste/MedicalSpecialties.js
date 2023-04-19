import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MedicalSpecialties = () => {
 const Items = [
    { name: 'Family Medicine', screen: 'FamilyMedicine' },
    { name: 'Cardiology', screen: 'Cardiology' },
    { name: 'Gynecology', screen: 'Gynecology' },
    { name: 'Neurology', screen: 'Neurology' },
    { name: 'Surgery', screen: 'Surgery' },
    { name: 'Psychiatry', screen: 'Psychiatry' },
    { name: 'Dermatology', screen: 'Dermatology' },
    { name: 'Ophthalmology', screen: 'Ophthalmology' },
    { name: 'Pediatrics', screen: 'Pediatrics' },
    { name: 'Dentist', screen: 'Dentist' },
    { name: 'Allergy and immunology', screen: 'AllergyAndImmunology' },
    { name: 'Gastroenterology', screen: 'Gastroenterology' },
    { name: 'Oncology', screen: 'Oncology' },
    { name: 'Pulmonology', screen: 'Pulmonology' },
    { name: 'Other', screen: 'Other' },
  ];


  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Item name={item.name} onPress={() => navigation.navigate(item.screen)} />
  );

  const Item = ({ name, onPress }) => (
    <View>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={style.itemText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={style.container}>
      <FlatList data={Items} renderItem={renderItem} />
    </View>
  );
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14082b'
    },
    
    button: {
    //backgroundColor: 'black',
      //borderRadius: 10,
      padding: 10,
      //margin: 12,
      borderWidth: 2,
      borderColor: '#c2bccf',
    },
    text: {
      color: '#14082b',
      fontSize: 25,
      backgroundColor:'white',
      width: '100%',
      //borderRadius: 8,
      borderWidth: 2,
      borderColor: '#c2bccf',
      height: 60,
      padding: 10,
      //margin: 15,
      textAlign: 'center',
    },
    itemText: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      margin: 17,
    },
  })

export default MedicalSpecialties;