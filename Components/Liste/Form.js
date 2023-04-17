import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function Form({ navigation }) {
  const [name2, setName2] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [clinic, setClinic] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');


  const handleSubmit = () => {
    navigation.navigate('ProfileMed', { name2, specialty, clinic, address, phone });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}>Name:</Text>
      <TextInput
      style={styles.input}
        value={name2}
        onChangeText={setName2}
        placeholderTextColor="gray"
        placeholder="Enter your name"
      />
      <Text style={styles.text1}>Specialty:</Text>
      <TextInput
      style={styles.input}
        value={specialty}
        onChangeText={setSpecialty}
        placeholder="Enter your Specialty"
        placeholderTextColor="gray"
      />
      <Text style={styles.text1}>Clinic:</Text>
      <TextInput
      style={styles.input}
        value={clinic}
        onChangeText={setClinic}
        placeholder="Enter your Clinic"
        placeholderTextColor="gray"
      />
      <Text style={styles.text1}>Address:</Text>
      <TextInput
      style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your Address"
        placeholderTextColor="gray"
      />
      <Text style={styles.text1}>Phone:</Text>
      <TextInput
      style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        placeholderTextColor="gray"
        placeholder="Enter your Phone"
      />
      <Pressable onPress={handleSubmit} style={styles.button}><Text style={styles.buttonText}>Submit</Text></Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14082b'
    },
    text1: {
      color:'white',
      fontSize: 16,
      margin: 5,
    }, 
    button: {
      backgroundColor: '#53599A',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
    input: {
        width: '80%',
        height: 38,
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 4,
        paddingLeft: 16,
        margin: 10,
      
      },
  });