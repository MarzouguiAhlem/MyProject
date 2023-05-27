import React, { useState, useEffect } from 'react';
      import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
      import AsyncStorage from '@react-native-async-storage/async-storage';
      import jwtDecode from 'jwt-decode';
      import { useNavigation } from '@react-navigation/native';
      import { storage, firebase } from '../../config';
      const Doctors = () => {
        
        const [doctors, setDoctors] = useState([]);
        const [chatRoomId, setChatRoomId] = useState('');
        const [email, setEmail] = useState('');
        const [images, setImages] = useState([]);
        const fetchPatients = async () => {
          try {
            const token = await AsyncStorage.getItem('token');
            const decodedToken = jwtDecode(token);
            const patientId = decodedToken['sub'];
            
            const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/doctors`);
            
            const data = await response.json();
            setDoctors(data);
          } catch (error) {
            console.error(error);
          }
        };
        
        const getImageUrlAndEmail = async (email) => {
          try {
            const firestore = firebase.firestore();
            const em = email.toString()
            console.log(email)
            const userRef = firestore.collection('users').doc(em);
            
            const userDoc = await userRef.get({ source: 'default' });
          
           // console.log(userDoc)
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
            const urls = await Promise.all(doctors.map(async (patient) => {
              const email = patient.email;
              console.log(email)
              const { imageUrl } = await getImageUrlAndEmail(email);
              return imageUrl;
            }));
            setImages(urls);
          };
        
          if (doctors.length > 0) {
            //console.log(doctors)
            getImageUrls();
          }
        }, [doctors]);
        
        useEffect(() => {
          fetchPatients();
        }, []);
        
        const navigation = useNavigation();
        
        const handleChatPress = async (doctorId) => {
          const token = await AsyncStorage.getItem('token');
          const decodedToken = jwtDecode(token);
          const patientId = decodedToken['sub'];
          const docId = doctorId;
        
          const response = await fetch(`http://192.168.1.129:3000/profile/${patientId}/chatRoom/${docId}`);
          const data = await response.json();
          setChatRoomId(data['id']);
          //console.log(chatRoomId)   
          navigation.navigate('Conversation', { chatRoomId: chatRoomId, doctorId: docId});
        };
        
        return (
          <View style={styles.container}>
            <FlatList
              data={doctors}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.itemContainer}>
                  <View style={styles.itemContent}>
                    <Image style={styles.avatar} source={{ uri: images[index] }} />
                    <View style={styles.textContainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.email}>{item.email}</Text>
                      <Text style={styles.specialty}>{item.specialty}</Text>
                    </View>
                    <TouchableOpacity style={styles.chatButton} onPress={() => handleChatPress(item.user_id)}>
                      <Text style={styles.chatButtonText}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
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
          specialty: {
            fontSize: 16,
            color: '#fff',
          },
          chatButton: {
            backgroundColor: '#7C3AED',
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginLeft: 10,
          },
          chatButtonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
          },
        });
      export default Doctors;