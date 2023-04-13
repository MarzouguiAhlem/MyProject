import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function ProfilePat  () {
  
  const Items = [{name:'Basic information'}, {name:'Diseases'}, {name:'Allergies'}, {name:'Vaccination'}, 
  {name:'Medical Specialties'},{name:'Doctors'},{name:'Medications'},{name:'ChatBox'},{name:'Logout'},];

  const renderItem = ({ item }) => <Item name={item.name} />;
  
  const Item = ({ name }) => (
    <View style={menuStyles.innerContainer}>
      <TouchableOpacity style={menuStyles.button}>
        <Text style={menuStyles.itemText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
      <View style={menuStyles.container}>
      <FlatList
        data={Items}
        renderItem={renderItem}>
      </FlatList>
    </View>
  );
};
const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#3A506B'
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
});;