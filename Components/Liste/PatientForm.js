import React, { useState } from 'react';
  import { StyleSheet,Alert, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
  import jwtDecode from 'jwt-decode';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { useNavigation } from '@react-navigation/native';
  
  
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
      const url = `http://192.168.43.210:3000/auth/signup/user/patientform/${patientId}`
      
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
    
      <View style={styles.container}>
      
      
      <ScrollView contentContainerStyle={styles.scrollContainer} style={{flexGrow: 1}}>
        <Text style={styles.title}>Modify information</Text>
        <TextInput
      style={styles.input}
        value={name}
        onChangeText={setName1}
        placeholderTextColor="gray"
        placeholder="Enter your name"
        color="white"
      />
 
      <TextInput
      style={styles.input}
        value={lastname}
        onChangeText={setlastname}
        placeholderTextColor="gray"
        placeholder="Enter your Last name"
        color="white"
      />
     
      <TextInput
      style={styles.input}
        value={birthdate}
        onChangeText={setBirthDate}
        placeholder="Enter your Birth Date"
        placeholderTextColor="gray"
        color="white"
      />
     
      <TextInput
      style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Enter your Gender"
        placeholderTextColor="gray"
        color="white"
      />
   
         <TextInput
        style={styles.input}
        placeholder="Enter your Email address"
        placeholderTextColor="gray"
        value={email}
        textContentType="emailAddress"
        onChangeText={setEmail}
        color="white"
      />
   
      <TextInput
      style={styles.input}
        value={adress}
        onChangeText={setAddress}
        placeholder="Enter your Address"
        placeholderTextColor="gray"
        color="white"
      />
      
      <TextInput
      style={styles.input}
        value={phonenumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        placeholderTextColor="gray"
        placeholder="Enter your Phone Number"
        color="white"
      />
     
      <TextInput
      style={styles.input}
        value={emergency}
        keyboardType="numeric"
        onChangeText={setContact}
        placeholder="Enter your Emergency Contact"
        placeholderTextColor="gray"
        color="white"
      />
     
      <TextInput
      style={styles.input}
        value={bloodtype}
        onChangeText={setBlood}
        placeholder="Enter your Blood Type"
        placeholderTextColor="gray"
        color="white"
      />
     
      <TextInput
      style={styles.input}
      value={height.toString()}
        onChangeText={(text) => setHeight(parseFloat(text))}
        keyboardType="numeric"
        
       
        placeholder="Enter your Height"
        placeholderTextColor="gray"
        color="white"
  
      />
     
      <TextInput
      style={styles.input}
      value={weight.toString()}
        onChangeText={(text) => setWeight(parseFloat(text))}
        keyboardType="numeric"
       
       
        placeholder="Enter your Weight"
        placeholderTextColor="gray"
        color="white"
       
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