import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const DoctorsList = ({ doctors, onDeleteDoctor }) => {
    return (
      <ScrollView>
        {doctors.map((doctor, index) => (
          <View style={styles.doctorCard} key={index}>
            <Image source={{ uri: doctor.photo }} style={styles.doctorPhoto} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctor}>{doctor.specialty}</Text>
              <Text style={styles.doctor}>{doctor.phone}</Text>
            <Text style={styles.doctor}>{doctor.address}</Text>
            </View>
            <TouchableOpacity onPress={() => onDeleteDoctor(index)} style={styles.button}>
                <Text style={{ color: 'white', fontSize: 15 }}>Delete</Text>
            </TouchableOpacity>
           
          </View>
        ))}
      </ScrollView>
    );
  };
  

const AddDoctorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [photo, setPhoto] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, specialty, photo, phone, address });
    setName('');
    setSpecialty('');
    setPhoto('');
    setPhone('');
    setAddress('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.formInput}
        placeholder="Doctor Name"
        value={name}
        color="white"
        placeholderTextColor="gray"
        onChangeText={setName}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Specialty"
        value={specialty}
        color="white"
        placeholderTextColor="gray"
        onChangeText={setSpecialty}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Photo URL"
        value={photo}
        color="white"
        placeholderTextColor="gray"
        onChangeText={setPhoto}
      />
         <TextInput
        style={styles.formInput}
        placeholder="Phone Number"
        value={phone}
        color="white"
        placeholderTextColor="gray"
        keyboardType="numeric"
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Address"
        value={address}
        color="white"
        placeholderTextColor="gray"
        onChangeText={setAddress}
      />
    <TouchableOpacity onPress={handleSubmit} style={styles.button1}>
        <Text style={{ color: 'white', fontSize: 18 }}>Add Doctor</Text>
    </TouchableOpacity>
      
    </View>
  );
};

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
  
    const handleAddDoctor = (doctor) => {
      setDoctors([...doctors, doctor]);
    };
  
    const handleDeleteDoctor = (index) => {
      setDoctors(doctors.filter((doctor, i) => i !== index));
    };
  
  
    return (
      <View style={styles.container}>
        <AddDoctorForm onSubmit={handleAddDoctor} />
        <DoctorsList
          doctors={doctors}
          onDeleteDoctor={handleDeleteDoctor}
        />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14082b',
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#c2bccf',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c2bccf',
    borderRadius: 4,
  },
  doctorPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  doctor: {
    fontSize: 14,
    color: 'white',
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#53599A",
    flexDirection: "row",
    justifyContent: "center",
    height: 32,
    width: '20%',
    alignItems: 'center',
  },
  button1: {
    borderRadius: 4,
    backgroundColor: "#53599A",
    flexDirection: "row",
    justifyContent: "center",
    height: 38,
    width: '40%',
    alignItems: 'center',
  }
});

export default Doctors;
