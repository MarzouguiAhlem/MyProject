import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const SignUpPat = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState();

  const handleSignup = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
        placeholder="enter your Full Name"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
        placeholder="enter your Email-adress"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        placeholder="enter your Password"
        placeholderTextColor="gray"
        color="white"
        required={true}
        secureTextEntry
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
        style={styles.input}
        placeholder="enter your Phone Number"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
    
      <TouchableOpacity style={styles.button} mode="contained" onPress={handleSignup}>
        <Text style={styles.text}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#14082b',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  input: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c2bccf',
    height: 42,
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#53599A',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 42,
    width: '45%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignUpPat;