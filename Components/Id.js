import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Id = () => {
  const [number, setNumber] = useState();

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('RF');
  };

  return (
    <View style={styles.container}>
     <TextInput
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
        style={styles.input}
        placeholder="Enter your ID"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      

<TouchableOpacity onPress={handleSubmit}
  style={{borderRadius: 6,
    backgroundColor: "#53599A",
    flexDirection: "row",
    justifyContent: "center",
    height: 48,
    width: '80%',
    alignItems: 'center',
  }}>
      <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14082b',
      },
    input: {
      width: '80%',
      height: 58,
      borderWidth: 1,
      borderColor: '#c2bccf',
      borderRadius: 6,
      paddingLeft: 20,
      marginBottom:15,
    },
  });

export default Id;