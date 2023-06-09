import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storage, firebase } from '../config';
import { initializeFirestore } from 'firebase/firestore'
export default function ProfilePat2({route}) {
  const {email} = route.params;
  const Items = [
    { name: 'Basic Information', screen: 'Basic3' },
    //{ name: 'Diseases', screen: 'Diseases' },
    { name: 'Allergies', screen: 'Allergies3' },
    //{ name: 'Vaccination', screen: 'Vaccination' },
    //{ name: 'Medical Specialties', screen: 'MedicalSpecialties' },
    { name: 'Doctors', screen: 'Doctors2' },
    { name: 'Medications', screen: 'Medications3' },
    
    { name: 'Logout', screen: 'Welcome' },
  ];

  const navigation = useNavigation();

  const onPressLogout = async () => {    
    
      navigation.navigate("Welcome")
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
    if (item.name === 'Basic Information') {
      return (
        <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => { navigation.navigate(item.screen, { email: email }); }}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    if (item.name === 'Doctors') {
        return (
          <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => { navigation.navigate(item.screen, { email2: email }); }}>
            <Text style={[styles.buttonText, { fontSize: 24 }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }
      if (item.name === 'Allergies') {
        return (
          <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => { navigation.navigate(item.screen, { email: email }); }}>
            <Text style={[styles.buttonText, { fontSize: 24 }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }
      if (item.name === 'Medications') {
        return (
          <TouchableOpacity style={[styles.button, { marginTop: 20, height: 60, borderRadius: 50 }]} onPress={() => { navigation.navigate(item.screen, { email: email }); }}>
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
  
  
