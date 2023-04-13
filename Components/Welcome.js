import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';


export default function Welcome({onPress, onPressLeft, onPressRight}) {
  
  return (
     <View style={styles.container}>
      <Text style={styles.regularText}>
      Welcome To My Health Mate Application
      </Text>

      <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#888' : '#444',
          borderRadius: 10,
          flexDirection: "row",
          padding: 10,
          height: 45,
          width: '57%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text style={{ color: '#fff',fontSize: 18, textAlign: 'center' }}>Emergency</Text>
    </Pressable> 

    <View style={styles.container1}>
      <TouchableOpacity onPress={onPressLeft} style={styles.button}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRight} style={styles.button}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>   
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
  container1: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#14082b'
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 40,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 8,
    margin: 8,
    height: 45,
    width: '26%',
    //borderWidth: 2,
    //borderColor: '#c2bccf',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});