import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Form({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    navigation.navigate('BasicInformation', { name, email });
  }

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}
