import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const MedicalSpecialties = () => {

    const handleSubmit = () => {
        // Do something with the text value, such as send it to a server or update state
      };
  return (
    <ScrollView style={style.container}>
 <Text style={style.text}>Medical Specialties</Text>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Family Medicine</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Cardiology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Gynecology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Neurology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Surgery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Psychiatry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Dermatology</Text>
      </TouchableOpacity><TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Ophthalmology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Pediatrics</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Dentist</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Allergy and immunology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Gastroenterology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Oncology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Pulmonology</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Other..</Text>
      </TouchableOpacity>

   
    </ScrollView>
  );
};
const style = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'white'
    },
    
    button: {
    //backgroundColor: 'black',
      //borderRadius: 10,
      padding: 10,
      //margin: 12,
      borderWidth: 2,
      borderColor: '#c2bccf',
    },
    text: {
      color: '#14082b',
      fontSize: 25,
      backgroundColor:'white',
      width: '100%',
      //borderRadius: 8,
      borderWidth: 2,
      borderColor: '#c2bccf',
      height: 60,
      padding: 10,
      //margin: 15,
      textAlign: 'center',
    },
    itemText: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      margin: 17,
    },
  })

export default MedicalSpecialties;