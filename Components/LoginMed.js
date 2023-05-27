import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function LoginMed() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [id, setid] = useState();

  const navigation = useNavigation();
  
  const handleSubmit = async () => {
    if (email === '' || password === '' || id === '') {
      alert('Please enter yor Email, Password and ID');} 
      else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address');}
      else {
      const data = {
  
        email: email,
        password: password,
        id: id,
        
      };
    
      const response = await fetch('http://192.168.42.7:3000/auth/login/doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(response)
      if (response.ok) {
        const token = await response.json(); // parse response to get the token
      
      console.log(token)
      await AsyncStorage.setItem('token', token['access_token']); 
      
        console.log('Login successful!');
        navigation.navigate('ProfileMed', {wlh: email});
      } else {
        console.log('Login failed.');
      };}
      
    }
  


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back!</Text>
    
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#A8A8A8"
          value={email}
          textContentType="emailAddress"
          onChangeText={setemail}
          required={true}
        />
    
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A8A8A8"
          value={password}
          onChangeText={setpassword}
          secureTextEntry
          required={true}
        />
    
        <TextInput
          keyboardType="numeric"
          onChangeText={setid}
          value={id}
          style={styles.input}
          placeholder="Enter your ID"
          placeholderTextColor="#A8A8A8"
          required={true}
        />
    
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
    }  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14082B',
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
        borderColor: '#7C3AED',
        borderRadius: 4,
        paddingLeft: 16,
        margin: 10,
        color: 'white',
      },
      loginButton: {
        borderRadius: 5,
        backgroundColor: '#7C3AED',
        flexDirection: 'row',
        padding: 5,
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 35,
      },
      loginButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      },
    });
    