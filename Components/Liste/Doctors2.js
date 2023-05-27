import React, { useState, useEffect } from 'react';
      import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
      import AsyncStorage from '@react-native-async-storage/async-storage';
      import jwtDecode from 'jwt-decode';
      import { useNavigation } from '@react-navigation/native';
      import { storage, firebase } from '../../config';
      const Doctors2 = ({route}) => {
        const {email2} = route.params
     
        const [doctors, setDoctors] = useState([]);
     
        const [email, setEmail] = useState('');
        const [images, setImages] = useState([]);
        
        const fetchPatients = async () => {
          try {
          
            const response = await fetch(`http://192.168.42.7:3000/profile/${email2}/doctor`);
            
            const data = await response.json();
            setDoctors(data);
           // console.log(data)
          } catch (error) {
            console.error(error);
          }
        };
        
        const getImageUrlAndEmail = async (email) => {
          try {
            const firestore = firebase.firestore();
            const em = email.toString()
            console.log(email)
            const userRef = firestore.collection('users').doc(em);
            
            const userDoc = await userRef.get({ source: 'default' });
          
           // console.log(userDoc)
            if (userDoc.exists) {
              const imageUrl = userDoc.data().imageUrl;
              const userEmail = userDoc.data().email;
              return { imageUrl, userEmail };
            } else {
              console.log('User does not exist in Firestore');
              return null;
            }
          } catch (error) {
            console.error(error);
            return null;
          }
        };
        
        useEffect(() => {
          const getImageUrls = async () => {
            const urls = await Promise.all(doctors.map(async (patient) => {
              const email = patient.email;
              console.log(email)
              const { imageUrl } = await getImageUrlAndEmail(email);
              return imageUrl;
            }));
            setImages(urls);
          };
        
          if (doctors.length > 0) {
            //console.log(doctors)
            getImageUrls();
          }
        }, [doctors]);
        
        useEffect(() => {
          fetchPatients();
        }, []);
        
        const navigation = useNavigation();
        
       
        
        

        return (
            <View style={styles.container}>
              <FlatList
                data={doctors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity style={styles.itemContainer}>
                    <View style={styles.itemContent}>
                      <Image style={styles.avatar} source={{ uri: images[index] }} />
                      <View style={styles.textContainer}>
                        <View style={styles.infoContainer}>
                          <Text style={styles.infoLabel}>Name:</Text>
                          <Text style={styles.info}>{item.name}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                          <Text style={styles.infoLabel}>Lastname:</Text>
                          <Text style={styles.info}>{item.lastname}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                          <Text style={styles.infoLabel}>Email:</Text>
                          <Text style={styles.info}>{item.email}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                          <Text style={styles.infoLabel}>Phone Number:</Text>
                          <Text style={styles.info}>{item.phoneNumber}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                          <Text style={styles.infoLabel}>Address:</Text>
                          <Text style={styles.info}>{item.address}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                          <Text style={styles.infoLabel}>Specialty:</Text>
                          <Text style={styles.info}>{item.specialty}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          );
          
          
                }  
                const styles = StyleSheet.create({
                    container: {
                      flex: 1,
                      backgroundColor: '#14082b',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                    },
                    itemContainer: {
                      paddingVertical: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: '#7C3AED',
                    },
                    itemContent: {
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                    avatar: {
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      marginRight: 15,
                    },
                    textContainer: {
                      flex: 1,
                    },
                    infoContainer: {
                      flexDirection: 'row',
                      marginBottom: 5,
                    },
                    infoLabel: {
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#7C3AED',
                      marginRight: 5,
                    },
                    info: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    chatButton: {
                      backgroundColor: '#7C3AED',
                      borderRadius: 30,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      marginLeft: 10,
                    },
                    chatButtonText: {
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 'bold',
                    },
                  });
                  
          
      
      export default Doctors2;