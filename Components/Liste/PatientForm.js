import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function PatientForm({ navigation }) {
  const [name1, setName1] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [Gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [blood, setBlood] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');


  const handleSubmit = () => {
    navigation.navigate('BasicInformation', { name1, BirthDate, Gender, email, address, phoneNumber, contact, blood, height, weight });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text1}>Name :</Text>
      <TextInput
      style={styles.input}
        value={name1}
        onChangeText={setName1}
        placeholderTextColor="gray"
        placeholder="Enter your name"
        color="white"
      />
      <Text style={styles.text1}>Birth Date :</Text>
      <TextInput
      style={styles.input}
        value={BirthDate}
        onChangeText={setBirthDate}
        placeholder="Enter your Birth Date"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Gender :</Text>
      <TextInput
      style={styles.input}
        value={Gender}
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
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your Address"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Phone Number :</Text>
      <TextInput
      style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        placeholderTextColor="gray"
        placeholder="Enter your Phone Number"
        color="white"
      />
      <Text style={styles.text1}>Emergency Contact:</Text>
      <TextInput
      style={styles.input}
        value={contact}
        keyboardType="numeric"
        onChangeText={setContact}
        placeholder="Enter your Emergency Contact"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Blood Type:</Text>
      <TextInput
      style={styles.input}
        value={blood}
        onChangeText={setBlood}
        placeholder="Enter your Blood Type"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Height:</Text>
      <TextInput
      style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder="Enter your Height"
        placeholderTextColor="gray"
        color="white"
      />
      <Text style={styles.text1}>Weight:</Text>
      <TextInput
      style={styles.input}
        value={weight}
        onChangeText={setWeight}
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

