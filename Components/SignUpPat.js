import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SignUpPat = () => {
  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState();

  const navigation = useNavigation();

  const handleSignup = async () => {
    const data = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      
    };
  
    const response = await fetch('http://192.168.1.129:3000/auth/signup/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(response)
    if (response.ok) {
      console.log('Signup successful!');
      navigation.navigate('Welcome');
    } else {
      console.log('Signup failed.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        label="First Name"
        value={name}
        onChangeText={text => setname(text)}
        style={styles.input}
        placeholder="enter your First Name"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Last Name"
        value={lastname}
        onChangeText={text => setlastname(text)}
        style={styles.input}
        placeholder="enter your Last Name"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setemail(text)}
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
        onChangeText={text => setpassword(text)}
        style={styles.input}
        placeholder="enter your Password"
        placeholderTextColor="gray"
        color="white"
        required={true}
        secureTextEntry
      />
       <TextInput
        keyboardType="numeric"
        onChangeText={setphonenumber}
        value={phonenumber}
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