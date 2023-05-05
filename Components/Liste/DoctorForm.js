import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
export default function DoctorForm() {
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhone] = useState('');
  const navigation = useNavigation();


  const handleSubmit = async () => {
    const data = {
      name: name,
      lastname: lastname,
      
      address: address,
      email: email,
      specialty: specialty,
      phonenumber: phonenumber,
     
      
    };
    const token = await AsyncStorage.getItem('token');
    console.log("slm")
    const decodedToken = jwtDecode(token);
     const doctorId = decodedToken['sub']; // Replace with actual doctor ID
    const url = `http://192.168.1.129:3000/auth/signup/doctor/doctorform/${doctorId}`
    
    console.log(url)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    
    if (response.ok) {
      console.log('Signup successful!');
      navigation.navigate('ProfileMed');
    } else {
      console.log('Signup failed.');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}>Name:</Text>
      <TextInput
      style={styles.input}
        value={name}
        onChangeText={setName}
        placeholderTextColor="gray"
        placeholder="Enter your name"
        color="white"
      />
       <Text style={styles.text1}>LastName:</Text>
      <TextInput
      style={styles.input}
        value={lastname}
        onChangeText={setlastname}
        placeholderTextColor="gray"
        placeholder="Enter your name"
        color="white"
      />
      <Text style={styles.text1}>Specialty:</Text>
      <TextInput
      style={styles.input}
        value={specialty}
        onChangeText={setSpecialty}
        placeholder="Enter your Specialty"
        placeholderTextColor="gray"
        color="white"
      />
      
      <Text style={styles.text1}>Address:</Text>
      <TextInput
      style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your Address"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Email:</Text>
      <TextInput
      style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="gray"
        placeholder="Enter your Email"
        color="white"
      />
      <Text style={styles.text1}>Phone:</Text>
      <TextInput
      style={styles.input}
        value={phonenumber}
        onChangeText={setPhone}
        keyboardType="numeric"
        placeholderTextColor="gray"
        placeholder="Enter your Phone"
        color="white"
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