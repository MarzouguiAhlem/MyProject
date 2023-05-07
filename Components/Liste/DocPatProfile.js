import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DocPatProfile({route}) {
  const {patId, docSpecialty, email} = route.params
  const Items = [
    { name: 'Basic Information', screen: 'Basic2' },
    { name: 'Diseases', screen: 'Diseases2' },
    { name: 'Allergies', screen: 'Allergies2' },
    { name: 'Vaccinations', screen: 'Vaccination2' },
    { name: 'Medical Specialties', screen: 'MedicalSpecialties2' },
    { name: 'Medications', screen: 'Medications2' }, 
  ];

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    // Check for the Logout item and render the Logout button accordingly
    if (item.name === 'Basic Information') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate('Basic2', { patientId: patId, docSpecialty: docSpecialty, email: email})}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    if (item.name === 'Diseases') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate('Diseases2', { patientId: patId, docSpecialty: docSpecialty})}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    if (item.name === 'Allergies') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate('Allergies2', {patientId: patId, docSpecialty: docSpecialty})}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    if (item.name === 'Vaccinations') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate('Vaccinations2', {patientId: patId, docSpecialty:docSpecialty})}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    if (item.name === 'Medications') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate('Medications2', {patientId: patId,docSpecialty:docSpecialty})}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
      if (item.name === 'Medical Specialties') {
        return (
          <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => navigation.navigate('MedicalSpecialties2', {patientId: patId, docSpecialty})}>
            <Text style={[styles.buttonText, { fontSize: 24 }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }
    
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
  
  
