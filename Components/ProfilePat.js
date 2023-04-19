import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ProfilePat() {
  const Items = [
    { name: 'Basic information', screen: 'PatientForm' },
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
