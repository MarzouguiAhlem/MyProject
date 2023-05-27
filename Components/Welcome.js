import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Welcome() {
  const navigation = useNavigation();

  const onPress = () => {
    // Navigate to IdRF screen
    navigation.navigate('Id');
  };
  const onPressRight = () => {
    // Navigate to DocPat screen
    navigation.navigate('DocPat2');
  };
 const onPressLeft = () => {
    // Navigate to DocPat screen
    navigation.navigate('DocPat1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        Welcome to MyHealthMate   Application
      </Text>
  
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor:'#7C3AED',
            borderRadius: 10,
            flexDirection: 'row',
            padding: 10,
            height: 45,
            width: '57%',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        <Text style ={styles.text}>
          Emergency
        </Text>
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
      backgroundColor: '#14082B',
    },
    container1: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#14082B',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 40,
      color: '#fff',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#7C3AED',
      borderRadius: 10,
      padding: 8,
      margin: 8,
      height: 45,
      width: '26%',
    },
    text: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
    },
  });
  
  