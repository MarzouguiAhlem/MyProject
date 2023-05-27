import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';

const ChatboxMed = () => {
  const navigation = useNavigation();
  const [chatboxes, setChatboxes] = useState([]);

  const fetchChatboxes = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const patientId = decodedToken['sub'];
      const response = await fetch(`http://192.168.42.7:3000/doctorP/${patientId}/chatRooms`);
      
      const data = await response.json();
      setChatboxes(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChatboxes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#14082b' }}>
      <FlatList
        data={chatboxes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Conversation', { chatRoomId: item.id, doctorId: item.doctorId })}
            style={{
              flex: 1,
              backgroundColor: 'white',
              margin: 10,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10, color: '#7C3AED' }}>
              {item.doctor_name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatboxMed;
