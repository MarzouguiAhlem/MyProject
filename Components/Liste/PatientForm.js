import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PatientForm() {
  const [name, setName1] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [adress, setAddress] = useState('');
  const [emergency, setContact] = useState('');
  const [bloodtype, setBlood] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [lastname, setlastname] = useState('')
  const navigation = useNavigation();
const handleSubmit = async () => {
    const data = {
      name: name,
      lastname: lastname,
      birthdate: birthdate,
      bloodtype: bloodtype,
      gender: gender,
      adress: adress,
      email: email,
      emergency: emergency,
      phonenumber: phonenumber,
      height: height,
      weight: weight,
      
    };
    const token = await AsyncStorage.getItem('token');
    console.log("slm")
    const decodedToken = jwtDecode(token);
    console.log(token)
     const patientId = decodedToken['sub']; // Replace with actual patient ID
    const url = `http://192.168.1.129:3000/auth/signup/user/patientform/${patientId}`
    
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
      navigation.navigate('ProfilePat');
    } else {
      console.log('Signup failed.');
    }
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}>Name :</Text>
      <TextInput
      style={styles.input}
        value={name}
        onChangeText={setName1}
        placeholderTextColor="gray"
        placeholder="Enter your name"
        color="white"
      />
      <Text style={styles.text1}>LastName :</Text>
      <TextInput
      style={styles.input}
        value={lastname}
        onChangeText={setlastname}
        placeholderTextColor="gray"
        placeholder="Enter your Last name"
        color="white"
      />
      <Text style={styles.text1}>Birth Date :</Text>
      <TextInput
      style={styles.input}
        value={birthdate}
        onChangeText={setBirthDate}
        placeholder="Enter your Birth Date"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Gender :</Text>
      <TextInput
      style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Enter your Gender"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Email Address :</Text>
         <TextInput
        style={styles.input}
        placeholder="Enter your Email address"
        placeholderTextColor="gray"
        value={email}
        textContentType="emailAddress"
        onChangeText={setEmail}
        color="white"
      />
      <Text style={styles.text1}>Address :</Text>
      <TextInput
      style={styles.input}
        value={adress}
        onChangeText={setAddress}
        placeholder="Enter your Address"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Phone Number :</Text>
      <TextInput
      style={styles.input}
        value={phonenumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        placeholderTextColor="gray"
        placeholder="Enter your Phone Number"
        color="white"
      />
      <Text style={styles.text1}>Emergency Contact:</Text>
      <TextInput
      style={styles.input}
        value={emergency}
        keyboardType="numeric"
        onChangeText={setContact}
        placeholder="Enter your Emergency Contact"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Blood Type:</Text>
      <TextInput
      style={styles.input}
        value={bloodtype}
        onChangeText={setBlood}
        placeholder="Enter your Blood Type"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Height:</Text>
      <TextInput
      style={styles.input}
      value={height.toString()}
        onChangeText={(text) => setHeight(parseFloat(text))}
        keyboardType="numeric"
        
       
        placeholder="Enter your Height"
        placeholderTextColor="gray"
        color="white"
  
      />
      <Text style={styles.text1}>Weight:</Text>
      <TextInput
      style={styles.input}
      value={weight.toString()}
        onChangeText={(text) => setWeight(parseFloat(text))}
        keyboardType="numeric"
       
       
        placeholder="Enter your Weight"
        placeholderTextColor="gray"
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

