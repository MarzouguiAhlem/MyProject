import React from 'react';
import { View, Text } from 'react-native';

export default function BasicInformation({ route }) {
  const { name, email } = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}
