import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

const ProfileMed = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Patient 1'},
    { id: 2, name: 'Patient 2'},
    { id: 3, name: 'Patient 3'},
    { id: 4, name: 'Patient 4'},
    { id: 5, name: 'Patient 5'},
  ]);

  const doctor = {
    name: 'Dr. Hakimi Omar',
    photo: require('./img/doctor.png'),
    specialty: 'Cardiologist',
    clinic: 'Chifa Clinic',
    address: 'Skanes Monastir',
    phone: '26 500 100',
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={handlePatientPress}>
        <Text style={styles.text2}>{item.name}</Text>
          </TouchableOpacity>
      </View>
    );
  };

  const handleChatPress = () => {
    // Navigate to chat screen
  };
  const handlePatientPress = () => {
    // Navigate to PatientProfile screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={doctor.photo} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.text1}>{doctor.specialty}</Text>
          <Text style={styles.text1}>{doctor.clinic}</Text>
          <Text style={styles.text1}>{doctor.address}</Text>
          <Text style={styles.text1}>{doctor.phone}</Text>
          <TouchableOpacity style={styles.button} onPress={handleChatPress}>
            <Text style={styles.buttonText}>Chat with Patients</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.heading}>Patients</Text>
      <FlatList
      backgroundColor='white'
        data={patients}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  photo: {
    width: 100,
    height: 120,
    borderRadius: 10,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 5,

  },
  text1: {
    color:'white',
    fontSize: 16,
    margin: 5,
  },
  text2: {
    color:'black',
    fontSize: 16,
    margin: 6,
  },
  heading: {
    color:'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  button: {
    backgroundColor: '#53599A',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProfileMed;