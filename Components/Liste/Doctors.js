import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';

const Doctors = () => {
  
  const [doctors, setDoctors] = useState([]);
  const [chatRoomId, setChatRoomId] = useState('');
  
  const fetchDoctors = async () => {
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
  
  useEffect(() => {
    fetchDoctors();
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
     console.log(chatRoomId)   
    navigation.navigate('Conversation', { chatRoomId: chatRoomId, doctorId: docId});
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <Image style={styles.avatar} source={{ uri: item.avatar }} />
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