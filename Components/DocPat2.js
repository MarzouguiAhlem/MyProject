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
   backgroundColor:'#7C3AED',
   borderRadius: 10,
   flexDirection: 'row',
   padding: 10,
   height: 45,
   width: '40%',
   alignItems: 'center',
   justifyContent: 'center',}}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight:'bold' }}>Doctor</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={handleSubmit2} style={{borderRadius: 5,
    backgroundColor:'#7C3AED',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    height: 45,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10}}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight:'bold' }}>Patient</Text>
  </TouchableOpacity>
    
</View>
  );
}