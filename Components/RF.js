import React, { useState, useEffect } from 'react';
import { ActivityIndicator, TouchableOpacity, Image, Platform, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function RF() {
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: false,
    });

    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: false,
    });

    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    const base64Img = await convertImgToBase64(selectedImageUri);
  
    // Make a POST request to the backend
    const response = await fetch('http://192.168.1.129:3000/auth/Emergency/RF', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: base64Img })
    });
  
    // Handle response from the backend
    const responseData = await response.json();
    console.log(responseData);
    if(response.ok){
      navigation.navigate('ProfilePat');
    }
    else {
      console.log("Patient doesn't exist")
    }
  };
  
  
  const convertImgToBase64 = async (imgUri) => {
    const imgData = await fetch(imgUri);
    const blob = await imgData.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); // return only the base64 string
      };
      reader.readAsDataURL(blob);
    });
  };
  

  const handleImageLoad = () => {
    console.log('Image loaded');
  };

  const handleImageError = () => {
    console.log('Error loading image');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an image from your Gallery</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <Text style={styles.buttonText}>Take a Picture</Text>
      </TouchableOpacity>
     
        <View style={styles.imageContainer}>
          <Image
            source={{ uri:selectedImageUri}}

            style={styles.image}
            resizeMode="contain"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </View>
      
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          borderRadius: 6,
          backgroundColor: '#53599A',
          flexDirection: 'row',
          justifyContent: 'center',
          height: 48,
          width: '80%',
          alignItems: 'center',
          margin: 60,
        }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    height: 300, // set a fixed height for the container
    width: 300,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#53599A',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
