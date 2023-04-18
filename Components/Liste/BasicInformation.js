import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function BasicInformation ({ route }){
  const { name1, BirthDate, Gender, email, address, phoneNumber, contact, blood, height, weight  } = route.params;


  const navigation = useNavigation();

 const handleForm1Press = () => {
    // Navigate to Form screen
    navigation.navigate('PatientForm');
  };
  const patient = {
    photo: require('./img/patient.png'),
  };

  return (
    <ScrollView style={styles.container}>
        <Image source={patient.photo} style={styles.photo}
         />
          <Text style={styles.text1}>Patient Name: {name1}</Text>
          <Text style={styles.text1}>Birth Date: {BirthDate}</Text>
          <Text style={styles.text1}>Gender: {Gender}</Text>
          <Text style={styles.text1}>Addres: {address}</Text>
          <Text style={styles.text1}>Email: {email}</Text>
          <Text style={styles.text1}>PhoneNumber: {phoneNumber}</Text>
          <Text style={styles.text1}>Emergency contact: {contact}</Text>
          <Text style={styles.text1}>Blood Type: {blood}</Text>
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
