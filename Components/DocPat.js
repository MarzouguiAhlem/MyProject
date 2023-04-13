import React from 'react';
import { View, TouchableOpacity, Text  } from 'react-native';

export default function DocPat () {

    const handleSubmit = () => {
      };
  return (
<View style={{ flexDirection: 'row',  flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#14082b'}}>
    <TouchableOpacity onPress={handleSubmit} style={{borderRadius: 5,
    backgroundColor: "white",
    padding: 5,
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10}}>
      <Text style={{ color: '#14082b', fontSize: 22, fontWeight:'bold' }}>Doctor</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={handleSubmit} style={{borderRadius: 5,
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