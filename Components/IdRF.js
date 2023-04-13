import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';

const IdRF = () => {
  const [number, setNumber] = useState();

  const handleSubmit = () => {
    console.log(number);
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
    backgroundColor: "#3498db",
    flexDirection: "row",
    justifyContent: "center",
    //padding: 10,
    height: 48,
    width: '80%',
    alignItems: 'center',
    //justifyContent: 'center',
  }
  }>
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

export default IdRF;