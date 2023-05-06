import React, { useState } from 'react';
import { StyleSheet,Alert, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
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
  
     <View style={styles.container}>
     
     
     <ScrollView contentContainerStyle={styles.scrollContainer} style={{flexGrow: 1}}>
       <Text style={styles.title}>Sign Up</Text>
       <TextInput
         label="First Name"
         value={name}
         onChangeText={(text) => setName(text)}
         style={styles.input}
         placeholder="enter your First Name"
         placeholderTextColor="gray"
         color="white"
         required={true}
       />
       <TextInput
         label="Last Name"
         value={lastname}
         onChangeText={(text) => setlastname(text)}
         style={styles.input}
         placeholder="enter your Last Name"
         placeholderTextColor="gray"
         color="white"
         required={true}
       />
       <TextInput
         label="Email"
         value={email}
         onChangeText={(text) => setEmail(text)}
         style={styles.input}
         keyboardType="email-address"
         placeholder="enter your Email-adress"
         placeholderTextColor="gray"
         color="white"
         required={true}
       />
       <TextInput
         label="Specialty"
         value={specialty}
         onChangeText={(text) => setSpecialty(text)}
         style={styles.input}
         placeholder="enter your Specialty"
         placeholderTextColor="gray"
         color="white"
         required={true}
         secureTextEntry
       />
       <TextInput
         keyboardType="numeric"
         onChangeText={setPhone}
         value={phonenumber}
         style={styles.input}
         placeholder="enter your Phone Number"
         placeholderTextColor="gray"
         color="white"
         required={true}
       />
       <TextInput
         keyboardType="numeric"
         onChangeText={address}
         value={setAddress}
         style={styles.input}
         placeholder="enter your address"
         placeholderTextColor="gray"
         color="white"
         required={true}
       />
      <TouchableOpacity style={styles.button} mode="contained" onPress={handleSubmit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    </ScrollView>
    </View>
    
  );
}

          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#14082b',
              paddingHorizontal: 20,
              paddingVertical: 30,
            },
            scrollContainer: {
              alignItems: 'center',
              justifyContent: 'center',
            },
            title: {
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 30,
              color: '#7C3AED',
              textAlign: 'center',
            },
            image: {
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: '#7C3AED',
            },
            input: {
              width: '100%',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#7C3AED',
              height: 50,
              padding: 12,
              marginVertical: 10,
              color: 'white',
              fontSize: 18,
            },
            imageContainer: {
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 30,
            },
            button: {
              backgroundColor: '#7C3AED',
              borderRadius: 10,
              padding: 12,
              marginVertical: 10,
              height: 50,
              width: '45%',
              alignItems: 'center',
              justifyContent: 'center',
            },
            buttonText: {
              color: 'white',
              fontSize: 18,
            },
          });
          