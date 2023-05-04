import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileMed (){
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const doctorId = decodedToken['sub'];
        console.log(doctorId)
        const response = await fetch(`http://192.168.1.129:3000/doctorP/${doctorId}/basic-info`);
        const data = await response.json();
        console.log(data)
        console.log(data['address'])
        setName(data['name']);
        setLastName(data['lastname']);
        setSpecialty(data['specialty']);
        setPhoneNumber(data['phoneNumber']);
        setAddress(data['address']);
        setEmail(data['email']);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const navigation = useNavigation();

  const handleChatPress = () => {
    // Navigate to chat screen
    navigation.navigate('ChatboxMed');
  };
  const handlePatients = () => {
    // Navigate to chat screen
    navigation.navigate('Patients');
  };

  const handleFormPress = () => {
    // Navigate to Form screen
    navigation.navigate('DoctorFormMed');
  };

  const handleLogoutPress = async () => {
    // Navigate to Form screen
    const token = await AsyncStorage.getItem('token2');


    
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
  };
return (
  <ScrollView style={styles.container}>
    {/* <Image source={photo} style={styles.photo} /> */}
    <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Name:</Text>
        <Text style={styles.infoText}>{name}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Last Name:</Text>
        <Text style={styles.infoText}>{lastname}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Specialty:</Text>
        <Text style={styles.infoText}>{specialty}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Phone number:</Text>
        <Text style={styles.infoText}>{phonenumber}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Address:</Text>
        <Text style={styles.infoText}>{address}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>{email}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Phone Number:</Text>
        <Text style={styles.infoText}>{phonenumber}</Text>
      </View>
     
    </View>
    <TouchableOpacity style={styles.button} onPress={handleChatPress}>
            <Text style={styles.buttonText}>Chat with Patients</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handlePatients}>
            <Text style={styles.buttonText}>List of Patients</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity style={styles.button} onPress={handleFormPress}>
            <Text style={styles.buttonText}>Modify informations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#14082b',
  },
  infoContainer: {
    backgroundColor: '#191b2a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#a9abb3',
    fontSize: 16,
    marginRight: 10,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#53599A',
    borderRadius: 30,
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
