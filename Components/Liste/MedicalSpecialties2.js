import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MedicalSpecialties2 = ({route}) => {
  const { patientId, docSpecialty } = route.params;
console.log(docSpecialty)
console.log(docSpecialty.trim() === 'Cardiology')
  const specialties = [
    { name: 'Family Medicine', screen: 'FamilyMedicine2' },
    { name: 'Cardiology', screen: 'Cardiology2' },
    { name: 'Gynecology', screen: 'Gynecology2' },
    { name: 'Neurology', screen: 'Neurology2' },
    { name: 'Surgery', screen: 'Surgery2' },
    { name: 'Psychiatry', screen: 'Psychiatry2' },
    { name: 'Dermatology', screen: 'Dermatology2' },
    { name: 'Ophthalmology', screen: 'Ophthalmology2' },
    { name: 'Pediatrics', screen: 'Pediatrics2' },
    { name: 'Dentist', screen: 'Dentist2' },
    { name: 'Allergy and immunology', screen: 'AllergyAndImmunology2' },
    { name: 'Gastroenterology', screen: 'Gastroenterology2' },
    { name: 'Oncology', screen: 'Oncology2' },
    { name: 'Pulmonology', screen: 'Pulmonology2' },
    { name: 'Other', screen: 'Other2' },
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    if (item.name === docSpecialty.trim()) {
      return (
        <View style={styles.itemContainer}>
          <TouchableOpacity style={[styles.button, { height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate(item.screen, { patientId: patientId, docSpecialty: docSpecialty})}>
            <Text style={[styles.itemText, { fontSize: 24 }]}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical Specialties</Text>
      <FlatList data={specialties} renderItem={renderItem} style={styles.listContainer} />
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

export default MedicalSpecialties2;
