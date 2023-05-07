import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import { storage, firebase } from '../../config';

const Patients = ({route}) => {
  const firestore = firebase.firestore();
  const {docSpecialty} = route.params
  const [patients, setPatients] = useState([]);
  const [chatRoomId, setChatRoomId] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setImageuri] = useState('');
  const [patId, setpatId] = useState();
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const doctorId = decodedToken['sub'];
        const response = await fetch(`http://192.168.43.210:3000/doctorP/${doctorId}/patients`);
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPatients();
  }, []);
  
  const getImageUrlAndEmail = async (email) => {
    try {
      
    
      const userRef = firestore.collection('users').doc(email);
      
      const userDoc = await userRef.get({ source: 'default' });
    
      
      if (userDoc.exists) {
        const imageUrl = userDoc.data().imageUrl;
        const userEmail = userDoc.data().email;
        return { imageUrl, userEmail };
      } else {
        console.log('User does not exist in Firestore');
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  

  useEffect(() => {
    const getImageUrls = async () => {
  const updatedPatients = await Promise.all(patients.map(async (patient) => {
    const email = patient.email;
    const { imageUrl } = await getImageUrlAndEmail(email);
    return {
      ...patient,
      imageUrl: imageUrl
    };
  }));
  setPatients(updatedPatients);
};

    
  
    if (patients.length > 0) {
     // console.log(patients)
      getImageUrls();
    }
  }, [patients]);
  

  
  

  const navigation = useNavigation();
  
  const handleChatPress = async (patientId) => {
    const token = await AsyncStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const doctorId = decodedToken['sub'];
    const patId = patientId;
   
    const response = await fetch(`http://192.168.43.210:3000/doctorP/${doctorId}/chatRoom/${patId}`);
    const data = await response.json();
    setChatRoomId(data['id']);   
    navigation.navigate('Conversation2', { chatRoomId: chatRoomId, patientId: patId});
  };
  const handleDeletePress = async (patientId) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const doctorId = decodedToken['sub'];
     
     //console.log(patientId)
      const response = await fetch(`http://192.168.43.210:3000/doctorP/${doctorId}/deletePatient/${patientId}`, {
      
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const OK = await response.json();
     
      if (OK) {
        // Remove the deleted patient from the list
        const updatedPatients = patients.filter(p => p.user_id !== patientId);
        
        setPatients(updatedPatients);
      } 
    } catch (error) {
      console.error(error);
    }
  };
  const handleAddPatientPress = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const doctorId = decodedToken['sub'];
   
      const response = await fetch(`http://192.168.43.210:3000/doctorP/${doctorId}/addPatient/${email}`, {
       
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response)

      //console.log(newPatient)
      const newPatient = await response.json();
      

      
      if (newPatient) {
        // Add the new patient to the list
        setPatients([...patients, newPatient]);
      } 
      setEmail('')
    } catch (error) {
      console.error(error);
    }
  };

 
  
  
  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <Image style={styles.avatar} source={{ uri: item.imageUrl }} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastname}>{item.lastname}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.chatButton}
                    onPress={() => handleChatPress(item.user_id)}
                  >
                    <Text style={styles.chatButtonText}>Chat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.visitProfileButton}
                    onPress={() => navigation.navigate('DocPatProfile', { patId: item.user_id, docSpecialty: docSpecialty})}
                  >
                    <Text style={styles.visitProfileButtonText}>Visit Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeletePress(item.user_id)}
                  >
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.addPatientContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.patientEmail}>Patient Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter patient email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddPatientPress()}
        >
          <Text style={styles.addButtonText}>Add Patient</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
        }   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14082b',
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    itemContainer: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#7C3AED',
    },
    itemContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 15,
      marginBottom: 40,
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 5,
    },
    email: {
      fontSize: 16,
      color: '#ccc',
      marginBottom: 5,
    },
    lastname: {
      fontSize: 16,
      color: '#fff',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginLeft: 60,
      marginTop: 5,
    },
    chatButton: {
      backgroundColor: '#7C3AED',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight: 10,
      marginLeft:-130,
    },
    chatButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: 'red',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    addButton: {
      backgroundColor: '#28a745',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 10,
      marginLeft: 10,
      width: 150,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    addPatientContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 30,
      paddingVertical: 5,
      paddingHorizontal: 20,
      marginRight: 10,
      fontSize: 16,
      height: 70,
    },
    patientEmail: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },visitProfileButton: {
        backgroundColor: '#007bff',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
      },
      visitProfileButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      
  });
  
  
  

        export default Patients;
