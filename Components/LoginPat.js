import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';



export default function LoginPat() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = () => {
    if (Email === '' || password === '') {
      alert('Please enter both email and password');} 
      else if (!/\S+@\S+\.\S+/.test(Email)) {
        alert('Please enter a valid email address');}
      else {alert('You are now connected!');
      console.log(Email);
      console.log(password);}}


  return (
   
<View style={styles.container}>
      <Text style={styles.title}>Welcome back !</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="gray"
        value={Email}
        textContentType="emailAddress"
        onChangeText={setEmail}
        color="white"
        required={true}

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        color="white"
        required={true}
      />
      
    
<TouchableOpacity onPress={handleSubmit} style={{borderRadius: 5,
    backgroundColor: "white",
    padding: 5,
    height: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35,
  }
  }>
      <Text style={{ color: '#14082b', fontSize: 18, fontWeight:'bold' }}>Login</Text>
  </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14082b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 30,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 4,
    paddingLeft: 16,
    margin: 10,
  
  },

});