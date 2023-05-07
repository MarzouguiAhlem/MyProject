import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Id = () => {
  const [id, setNumber] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    const data = {
      id:id
    }
    const response = await fetch('http://192.168.43.210:3000/auth/Emergency/id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
   console.log(response)
    if (response.ok) {
      // const token = await response.json(); // parse response to get the token
      
      // console.log(token)
      // await AsyncStorage.setItem('token3', token['access_token']); // save token in local storage
     
      navigation.navigate('RF');
    }else {
      console.log('Invalid ID.');
      const error = await response.json();
      Alert.alert('Invalid ID', error.message);
    }
   
   
  };

  return (
    <View style={styles.container}>
     <TextInput
        
        onChangeText={setNumber}
        value={id}
        style={styles.input}
        placeholder="Enter your ID"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      

<TouchableOpacity onPress={handleSubmit}
  style={{borderRadius: 6,
    backgroundColor: "#53599A",
    flexDirection: "row",
    justifyContent: "center",
    height: 48,
    width: '80%',
    alignItems: 'center',
  }}>
      <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14082b',
      },
    input: {
      width: '80%',
      height: 58,
      borderWidth: 1,
      borderColor: '#c2bccf',
      borderRadius: 6,
      paddingLeft: 20,
      marginBottom:15,
    },
  });

export default Id;