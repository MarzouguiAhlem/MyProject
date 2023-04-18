import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Welcome() {
  const navigation = useNavigation();

  const onPress = () => {
    // Navigate to IdRF screen
    navigation.navigate('IdRF');
  };
  const onPressRight = () => {
    // Navigate to DocPat screen
    navigation.navigate('DocPat');
  };
 const onPressLeft = () => {
    // Navigate to DocPat screen
    navigation.navigate('DocPat');
  };


  return (
     <View style={styles.container}>
      <Text style={styles.regularText}>
      Welcome To My Health Mate Application
      </Text>

      <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#888' : '#53599A',
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
    backgroundColor: '#53599A',
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