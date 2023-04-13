import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList,ImageBackground } from 'react-native';

function Medications() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const handleSend = () => {
    setMessages([...messages, { id: messages.length, text }]);
    setText('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <ImageBackground
      style={styles.background}
      source={require('./img/back4.png')}
    >
     <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Type a text..."
          placeholderTextColor={"white"}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSend}
        />
      </View>
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F5FCFF',
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#EEE',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    //backgroundColor: '#DDD',
  },
  inputText: {
    flex: 1,
    height: 50,
    color: 'white',
    backgroundColor: '#14082b',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#c2bccf',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default Medications;