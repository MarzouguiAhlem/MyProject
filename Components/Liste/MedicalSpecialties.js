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
  <View style={styles.itemContainer}>
    <TouchableOpacity style={[styles.button, { height: 60, borderRadius: 50 }]} onPress={onPress}>
      <Text style={[styles.itemText, { fontSize: 24 }]}>{name}</Text>
    </TouchableOpacity>
  </View>
);

return (
  <View style={styles.container}>
    <Text style={styles.title}>Medical Specialties</Text>
    <FlatList data={Items} renderItem={renderItem} style={styles.listContainer} />
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
  button: {
    backgroundColor: '#7C3AED',
    borderRadius: 30,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  itemContainer: {
    width: '100%',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  listContainer: {
    width: '100%',
  },
});



export default MedicalSpecialties;