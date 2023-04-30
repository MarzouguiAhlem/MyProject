import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
export default function BasicInformation (){
  
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [blood_type, setBloodType] = useState('');
  const [emergency_contact, setEmergency] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const patientId = decodedToken['sub'];
        console.log(patientId)
        const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/basic-info`);
        const data = await response.json();
        console.log(data)
      
        setName(data['name']);
        setLastName(data['lastname']);
        setEmergency(data['Emergency']);
        setPhoneNumber(data['phone_number']);
        setAddress(data['address']);
        setEmail(data['email']);
        setPhoto(data['photo'])
        setWeight(data['weight'])
        setHeight(data['height'])
        setGender(data['gender'])
        setBirthdate(data['birthdate'])
        setBloodType(data['blood_type'])
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const navigation = useNavigation();
 
 const handleForm1Press = () => {
    // Navigate to Form screen

    navigation.navigate('PatientForm');
  };

  return (
    <ScrollView style={styles.container}>
        {/* <Image source={photo} style={styles.photo}
         /> */}
          <Text style={styles.text1}>Patient Name: {name}</Text>
          <Text style={styles.text1}>Patient LastName: {lastname}</Text>
          <Text style={styles.text1}>Birth Date: {birthdate}</Text>
          <Text style={styles.text1}>Gender: {gender}</Text>
          <Text style={styles.text1}>Address: {address}</Text>
          <Text style={styles.text1}>Email: {email}</Text>
          <Text style={styles.text1}>PhoneNumber: {phone_number}</Text>
          <Text style={styles.text1}>Emergency contact: {emergency_contact}</Text>
          <Text style={styles.text1}>Blood Type: {blood_type}</Text>
          <Text style={styles.text1}>Height: {height}</Text>
          <Text style={styles.text1}>Weight: {weight}</Text>
         
          <TouchableOpacity style={styles.button} onPress={handleForm1Press}>
            <Text style={styles.buttonText}>Modify informations</Text>
          </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#14082b'
  },
  photo: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 20,
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
});
