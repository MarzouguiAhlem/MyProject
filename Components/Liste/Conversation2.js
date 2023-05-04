import React, { useEffect, useState,useCallback,useLayoutEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import io from 'socket.io-client';


export default function Conversation({ route }) {
  const { chatRoomId, doctorId } = route.params;

  const [text, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    
    const connectSocket = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const patientId = decodedToken['sub'];
        const socket = io('http://192.168.1.129:3000', {
          query: { patientId, chatRoomId, doctorId },
        });
        
        setSocket(socket);
        
        socket.emit('join', chatRoomId);
      } catch (error) {
        console.error(error);
      }
    };
    connectSocket();
  
  
}, [chatRoomId, socket]);
useLayoutEffect(() => {
  const fetchConversation = async () => {
    try {
      
      if (socket) {
        socket.on('newMessage', (message) => {
      
          setMessages([message.content]);
        });
        socket.emit('joinChatRoom', chatRoomId);
        socket.on('messageHistory', (messages) => {
          setMessages(messages);
        });
      }
      return () => {
        if (socket) {
          socket.off('newMessage');
        }
      };
    } catch (error) {
      console.error(error);
    }
  };

  fetchConversation();
}, [chatRoomId, socket]);


  // useEffect(() => {
  //   const handleMessage = (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);

  //   };
  //   if (socket) {
  //     socket.on('chatMessage', handleMessage); // update the event name
  //   }
  //   return () => {
  //     if (socket) {
  //       socket.off('chatMessage', handleMessage); // update the event name
  //     }
  //   };
  // }, [socket]);
  const sendMessage = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const patientId = decodedToken['sub'];
    try {
      if (!socket) {
        console.error('Socket connection not established');
        return;
      }
  
      const message = text;
  
      const senderId = patientId;
      socket.emit('sendMsg', { chatRoomId, senderId, message }, (response) => {
        console.log(message)
        if (response.status === 'ok') {
          setMessages(prevMessages => [...prevMessages, message.content]);

          setNewMessage('');
        } else {
          console.error(response.error);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [chatRoomId, socket, text]);
  
  
  

   const renderChatMessage = useCallback(({ item }) => {
    const senderStyle = item.sender === 'doctor' ? styles.patient : styles.doctor;
    const justifyContent = item.sender === 'doctor' ? 'flex-end' : 'flex-start';
    return (
      <View style={[styles.chatMessageContainer, { alignSelf: senderStyle.alignSelf, justifyContent }]}>
        <Text style={[styles.chatMessageText, senderStyle]}>{item.content}</Text>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={messages?.messages}
        keyExtractor={(message, index) => index.toString()}
        renderItem={renderChatMessage}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          onChangeText={setNewMessage}
          value={text}
        />
       
       
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatMessageContainer: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatMessageText: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    fontSize: 16,
    lineHeight: 24,
  },
  patient: {
    backgroundColor: '#80ADA0',
    color: 'white',
    alignSelf: 'flex-end',
  },
  doctor: {
    backgroundColor: 'gray',
    color: 'white',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f7f7f7',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  sendButton: {
    backgroundColor: '#c2bccf',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    height: 38,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#14082b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});