/*import React, { useState } from 'react';
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
} */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

export default function PatientForm ({}) {
  const [patient, setPatient] = useState({
    photo: '',
    name: '',
    birthDate: '',
    gender: '',
    phoneNumber: '',
    email: '',
    address: '',
    emergencyContact: '',
    bloodType: '',
    weight: '',
    height: '',
  });

  const handleInputChange = (field, value) => {
    setPatient({ ...patient, [field]: value });
  };

  const handleSubmit = () => {
    console.log(patient);
    // Submit the form to create/update the patient profile
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Patient Photo URL:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('photo', value)}
        value={patient.photo}
      />

      <Text style={styles.label}>Patient Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('name', value)}
        value={patient.name}
      />

      <Text style={styles.label}>Patient Birth Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('birthDate', value)}
        value={patient.birthDate}
      />

      <Text style={styles.label}>Patient Gender:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('gender', value)}
        value={patient.gender}
      />

      <Text style={styles.label}>Patient Phone Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('phoneNumber', value)}
        value={patient.phoneNumber}
      />

      <Text style={styles.label}>Patient Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('email', value)}
        value={patient.email}
      />

      <Text style={styles.label}>Patient Address:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('address', value)}
        value={patient.address}
      />

      <Text style={styles.label}>Emergency Contact:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('emergencyContact', value)}
        value={patient.emergencyContact}
      />

      <Text style={styles.label}>Blood Type:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('bloodType', value)}
        value={patient.bloodType}
      />

      <Text style={styles.label}>Weight:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('weight', value)}
        value={patient.weight}
      />

      <Text style={styles.label}>Height:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('height', value)}
        value={patient.height}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    label: {
      fontWeight: 'bold',
      marginVertical: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      marginTop: 20,
    },
  });
  
