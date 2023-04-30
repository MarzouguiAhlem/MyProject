import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./path/to/image')} style={styles.photo} /> */}
        <View style={styles.info}>
          <Text style={styles.nxme}>{name}</Text>
          <Text style={styles.text1}>{lastname}</Text>
          <Text style={styles.text1}>{specialty}</Text>
          <Text style={styles.text1}>{email}</Text>
          <Text style={styles.text1}>{address}</Text>
          <Text style={styles.text1}>{phonenumber}</Text>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#14082b'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  photo: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  nxme: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 5,

  },
  text1: {
    color:'white',
    fontSize: 16,
    margin: 5,
  },
  text2: {
    color:'black',
    fontSize: 16,
    margin: 6,
  },
  heading: {
    color:'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    
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
});
