import React from 'react';
import { View, TouchableOpacity, Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function DocPat2 () {
  const navigation = useNavigation();
    const handleSubmit1 = () => {
      navigation.navigate('SignUpMed');};
      const handleSubmit2 = () => {
        navigation.navigate('SignUpPat');};
  return (
<View style={{ flexDirection: 'row',  flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#14082b'}}>
    <TouchableOpacity onPress={handleSubmit1} style={{borderRadius: 5,
    backgroundColor: "white",
    padding: 5,
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10}}>
      <Text style={{ color: '#14082b', fontSize: 22, fontWeight:'bold' }}>Doctor</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={handleSubmit2} style={{borderRadius: 5,
    backgroundColor: "white",
    padding: 5,
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10}}>
      <Text style={{ color: '#14082b', fontSize: 22, fontWeight:'bold' }}>Patient</Text>
  </TouchableOpacity>
    
</View>
  );
}