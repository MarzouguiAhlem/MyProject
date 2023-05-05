import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';


export default function Allergies2({route}) {
//     const {patientId, doscSpecialty} = route.params
//   const [list, setList] = useState([]);
//   const [name, setName] = useState('');
//   const [user, setUser] = useState(null);
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
     
       
//         const response = await fetch(`http://192.168.1.129:3000/doctorP/patients/${patientId}/allergies`);
//         const data = await response.json();
//         setList(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);

//   const handleAddItem = async () => {
   
    
//     try {
       
//       const response = await fetch(`http://192.168.1.129:3000/doctorP/patients/${patientId}/allergies/addAll/${Alname}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({patientId: patientId, name: Alname})
//       });
      
//       const data = await response.json();
//       setUser(data);
      
//       if (response.ok) {
//         const newItem = { name: name };
//         setList([...list, newItem]);
//         setName('');
//       } else {
//         console.log('Unauthorized!');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Allergies</Text>
//       <FlatList
//         data={list}
//         renderItem={({ item }) => (
//           <View style={styles.listItem}>
//             <Text style={styles.listItemTitle}>Name:</Text>
//             <Text style={styles.listItemText}>{item.name}</Text>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.listContainer}
//       />
//       {(
//         <View style={styles.form}>
//           <Text style={styles.formTitle}>Add a New Disease</Text>
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Name:</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter the name of the disease"
//               placeholderTextColor="#979797"
//               value={name}
//               onChangeText={setDescription}
//               required={true}
//             />
//           </View>
//           <TouchableOpacity onPress={handleAddItem(name)} style={styles.button}>
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
      }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#14082b',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
      alignSelf: 'flex-start',
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      paddingLeft: 10,
      marginBottom: 20,
      color: '#fff',
    },
    button: {
      backgroundColor: '#7C3AED',
      borderRadius: 30,
      width: 120,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    listContainer: {
      width: '100%',
    },
    listItem: {
      backgroundColor: '#1C1247',
      padding: 20,
      borderRadius: 8,
      marginBottom: 10,
    },
    listItemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#7C3AED',
      marginBottom: 5,
    },
    listItemText: {
      fontSize: 16,
      color: '#fff',
    },
    form: {
      width: '100%',
      backgroundColor: '#1C1247',
      borderRadius: 8,
      padding: 20,
      marginTop: 20,
    },
    formTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#7C3AED',
      marginBottom: 10,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      color: '#7C3AED',
      fontSize: 16,
      marginBottom: 5,
    },
  });

  


