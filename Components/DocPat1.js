import React from 'react';
import { View, TouchableOpacity, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DocPat1 () {
  const navigation = useNavigation();

  const handleSubmit1 = () => {
    navigation.navigate('LoginMed');
  };

  const handleSubmit2 = () => {
    navigation.navigate('LoginPat');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#14082B', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 50 }}>
        <TouchableOpacity onPress={handleSubmit1} style={{ borderRadius: 10, backgroundColor: '#7C3AED', padding: 10, height: 60, width: '45%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSubmit2} style={{ borderRadius: 10, backgroundColor: '#7C3AED', padding: 10, height: 60, width: '45%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Patient</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
