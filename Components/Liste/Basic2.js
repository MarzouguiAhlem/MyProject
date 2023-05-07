import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { storage, firebase } from '../../config';
export default function Basic2({route}){
  const {patientId, docSpecialty, email} = route.params
  console.log(route)
  const patId = patientId
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
  const [email2, setEmail] = useState('');
  const [image, setImageuri] = useState('')
  const firestore = firebase.firestore();
  const getImageUrlAndEmail = async (email) => {
    try {
      const em = email.toString();
      const userRef = firestore.collection('users').doc(email);
      
      const userDoc = await userRef.get({ source: 'default' });
    
      console.log(userDoc);
      if (userDoc.exists) {
        const imageUrl = userDoc.data().imageUrl;
        const userEmail = userDoc.data().email;
        return { imageUrl, userEmail };
      } else {
        console.log('User does not exist in Firestore');
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const patientId = decodedToken['sub'];
        console.log(patientId)
        const response = await fetch(`http://192.168.43.210:3000/profile/${patId}/basic-info`);
        const data = await response.json();
        console.log(data)
      
        setName(data['name']);
        setLastName(data['lastname']);
        setEmergency(data['Emergency']);
        setPhoneNumber(data['phone_number']);
        setAddress(data['address']);
        setEmail(data['email']);
        
        setWeight(data['weight'])
        setHeight(data['height'])
        setGender(data['gender'])
        setBirthdate(data['birthdate'])
        setBloodType(data['blood_type'])
  
        if (email) {
          console.log(email);
          const { imageUrl } = await getImageUrlAndEmail(email);
          setImageuri(imageUrl);
        }
      }
      catch(error){
        console.log(error)
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
          <Text style={styles.infoLabel}>Birth Date:</Text>
          <Text style={styles.infoText}>{birthdate}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender:</Text>
          <Text style={styles.infoText}>{gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoText}>{address}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{email2}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone Number:</Text>
          <Text style={styles.infoText}>{phone_number}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Emergency Contact:</Text>
          <Text style={styles.infoText}>{emergency_contact}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Blood Type:</Text>
          <Text style={styles.infoText}>{blood_type}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Height:</Text>
          <Text style={styles.infoText}>{height}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Weight:</Text>
          <Text style={styles.infoText}>{weight}</Text>
        </View>

        <View style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="contain"
             
            />
          ) : null}
        </View>

      </View>
      <TouchableOpacity style={styles.button} onPress={handleForm1Press}>
        <Text style={styles.buttonText}>Modify Information</Text>
      </TouchableOpacity>
    </ScrollView>
  );
  }
  
  const styles = StyleSheet.create({
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 30,
    },
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
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: '#7C3AED',
    },
  });
  