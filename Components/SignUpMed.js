import React, { useState } from 'react';
import { StyleSheet,Alert, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { ActivityIndicator } from 'react-native';
import { Buffer } from 'buffer'
import { storage, firebase } from '../config';
const SignUp = () => {
  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState();
  const [doctor_id, setdoctor_id] = useState();
  const [image, setImage] = useState(null)
  const [URI, setSelectedImageUri] = useState('')
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);


  const handleSignup = async () => {
    const data = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      doctor_id: doctor_id,
      image: image
    };
    console.log(image)
    const emailCheckResponse = await fetch(`http://192.168.1.129:3000/auth/user/check-email/${email}`);
    //console.log(emailCheckResponse)
    const emailCheckData = await emailCheckResponse.json();
  
    if (emailCheckData.exists) {
      console.log('Email already in use');
      Alert.alert('Email already in use', 'The email you entered is already registered. Please use a different email address.');
    } else {
      // You can add a Toast or an Alert component to notify the user that the email is already in use
  
      const response = await fetch('http://192.168.1.129:3000/auth/signup/doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(response)
      if (response.ok) {
        const token = await response.json(); // parse response to get the token
        console.log('Signup successful!');
        console.log(token)
        await AsyncStorage.setItem('token', token['access_token']); // save token in local storage
        console.log('Signup successful!');
        navigation.navigate('DoctorForm');
  
        // Store image URL and email in Firebase Firestore
        const userRef = firebase.firestore().collection('users').doc(email);
        await userRef.set({
          imageUrl: image,
          email: email
        });
      } else {
        console.log('Signup failed.');
      }
    };
  }
  
  const takePicture = async (email) => {
    try {
      setIsLoading(true);
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: false,
      });
  
      if (!result.canceled) {
        const compressedImage = await ImageManipulator.manipulateAsync(
          result.uri,
          [{ resize: { width: 400 } }],
          { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
        );
  
        const response = await fetch(compressedImage.uri);
        const blob = await response.blob();
        setSelectedImageUri(compressedImage.uri);
        // Upload image to Firebase Storage
        const ref = storage.ref().child(`images/${email}/${new Date().toISOString()}`);
        await ref.put(blob);
  
        // Get image URL from Firebase Storage
        const imageUrl = await ref.getDownloadURL();
        console.log(email);
        // Set image URL state
        setImage(imageUrl);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

const pickImage = async (email) => {
  
  try {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: false,
    });

    if (!result.canceled) {
      const compressedImage = await ImageManipulator.manipulateAsync(
        result.uri,
        [{ resize: { width: 400 } }],
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
      );

      const response = await fetch(compressedImage.uri);
      const blob = await response.blob();
      setSelectedImageUri(compressedImage.uri);
      // Upload image to Firebase Storage
      const ref = storage.ref().child(`images/${email}/${new Date().toISOString()}`);
      await ref.put(blob);

      // Get image URL from Firebase Storage
      const imageUrl = await ref.getDownloadURL();

      // Set image URL state
      setImage(imageUrl);
      console.log(email);
       // Store image URL and email in Firebase Firestore
       const userRef = firebase.firestore().collection('users').doc(email);
       await userRef.update({
         imageUrl: imageUrl,
         email: email
       });
     }
      setIsLoading(false);
    }
   catch (error) {
    console.error(error);
  }
};

const handleImageLoad = () => {
  console.log('Image loaded');
};

const handleImageError = () => {
  console.log('Error loading image');
};



return (
  <View style={styles.container}>
   
    {isLoading && <ActivityIndicator style={styles.spinner} size="large" color="white" />}
    <ScrollView contentContainerStyle={styles.scrollContainer} style={{flexGrow: 1}}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        label="First Name"
        value={name}
        onChangeText={(text) => setname(text)}
        style={styles.input}
        placeholder="enter your First Name"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Last Name"
        value={lastname}
        onChangeText={(text) => setlastname(text)}
        style={styles.input}
        placeholder="enter your Last Name"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
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
        onChangeText={(text) => setpassword(text)}
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
      <TextInput
        keyboardType="numeric"
        onChangeText={setdoctor_id}
        value={doctor_id}
        style={styles.input}
        placeholder="enter your Doctor ID"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />

      <TouchableOpacity style={styles.button} mode="contained" onPress={takePicture}>
        <Text style={styles.text}>Take Picture</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} mode="contained" onPress={pickImage}>
        <Text style={styles.text}>Select Picture</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {image ? (
          <Image
            source={{ uri: URI }}
            style={styles.image}
            resizeMode="contain"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : null}
      </View>

      <TouchableOpacity style={styles.button} mode="contained" onPress={handleSignup}>
        <Text style={styles.text}>Create Account</Text>
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
            height: 40,
            padding: 12,
            marginVertical: 10,
            color: 'white',
            fontSize: 15,
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
        

export default SignUp;