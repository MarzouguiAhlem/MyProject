import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const ProfileMed = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Patient 1', age: 30 },
    { id: 2, name: 'Patient 2', age: 40 },
    { id: 3, name: 'Patient 3', age: 25 },
  ]);

  const doctor = {
    name: 'Dr. John Doe',
    //photo: require('../assets/doctor.jpg'),
    specialty: 'Cardiologist',
    clinic: 'XYZ Clinic',
    address: '123 Main St, Anytown USA',
    phone: '555-555-5555',
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
      </View>
    );
  };

  const handleChatPress = () => {
    // Navigate to chat screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={doctor.photo} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <Text style={styles.clinic}>{doctor.clinic}</Text>
          <Text style={styles.address}>{doctor.address}</Text>
          <Text style={styles.phone}>{doctor.phone}</Text>
          <TouchableOpacity style={styles.button} onPress={handleChatPress}>
            <Text style={styles.buttonText}>Chat with Patients</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.heading}>Patients</Text>
      <FlatList
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
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specialty: {
    color:'white',
    fontSize: 16,
    marginBottom: 5,
  },
  clinic: {
    color:'white',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    
    color:'white',
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    color:'white',
    fontSize: 16,
    marginBottom: 5,
  },
  heading: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
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