import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Platform, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


export default function RF() {
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('ProfilePat');
  };

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      // new property to include when using SDK version 48 or higher
      base64: true,
    });
  
    if (!result.canceled) {
      // use the assets array instead of the uri property
      setSelectedImage(result.assets[0].uri);
    }
  };
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Pick an image from your Gallery</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Pick Image</Text>
          </TouchableOpacity>
      {selectedImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
        </View>
      )}
      <TouchableOpacity onPress={handleSubmit}
  style={{borderRadius: 6,
    backgroundColor: "#53599A",
    flexDirection: "row",
    justifyContent: "center",
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
        marginTop: 20,
        backgroundColor: '#000',
        borderRadius: 5,
        overflow: 'hidden',
      },
      image: {
        backgroundColor: '#53599A',
        width: '100%',
        height: 200,
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
    