import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';



import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import SignUpMed from './Components/SignUpMed';
import SignUpPat from './Components/SignUpPat';
import LoginMed from './Components/LoginMed';
import LoginPat from './Components/LoginPat';
import Id from './Components/Id'
import DocPat1 from './Components/DocPat1';
import DocPat2 from './Components/DocPat2';
import ProfileMed from './Components/ProfileMed';
import ProfilePat from './Components/ProfilePat';
import Submit from './Components/Submit';
import Input from './Components/Input';
import DoctorForm from './Components/Liste/DoctorForm';
import PatientForm from './Components/Liste/PatientForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Diseases from './Components/Liste/Diseases';
import Allergies from './Components/Liste/Allergies';
import Specialties from './Components/Liste/MedicalSpecialties';
import ChatboxMed from './Components/Liste/ChatboxMed';
import ChatboxPat from './Components/Liste/ChatboxPat';
import Vaccination from './Components/Liste/Vaccination';
import Medications from './Components/Liste/Medications';
import Doctors from './Components/Liste/Doctors';
import BasicInformation from './Components/Liste/BasicInformation';
import MedicalSpecialties from './Components/Liste/MedicalSpecialties';



import RF from './Components/RF';

const Stack = createStackNavigator();



export default function App() {
  return (
    /*<>
    <NavigationContainer>
      <View style={styles.container}>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen name="PatientForm" component={PatientForm} />
        <Stack.Screen name="BasicInformation" component={BasicInformation} />
     </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View> 
    </NavigationContainer>
  </>*/
    /*<>
    <NavigationContainer>
      <View style={styles.container}>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen name="DoctorForm" component={DoctorForm} />
        <Stack.Screen name="ProfileMed" component={ProfileMed} />
        <Stack.Screen name="ChatboxMed" component={ChatboxMed} />
        <Stack.Screen name="ProfilePat" component={ProfilePat} />
     </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View> 
    </NavigationContainer>
   </>*/

 /*<>  
<NavigationContainer>
      <View style={styles.container}>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="DocPat" component={DocPat} />
        <Stack.Screen name="IdRF" component={IdRF} />
     </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View> 
    </NavigationContainer>
 </>*/




  <>  
<NavigationContainer>
      <View style={styles.container}>
      <Header/>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Id" component={Id} />
        <Stack.Screen name="RF" component={RF} />
        <Stack.Screen name="DocPat1" component={DocPat1} />
        <Stack.Screen name="DocPat2" component={DocPat2} />
        <Stack.Screen name="LoginPat" component={LoginPat} />
        <Stack.Screen name="LoginMed" component={LoginMed} />
        <Stack.Screen name="SignUpPat" component={SignUpPat} />
        <Stack.Screen name="SignUpMed" component={SignUpMed} />
        <Stack.Screen name="DoctorForm" component={DoctorForm} />
        <Stack.Screen name="ProfileMed" component={ProfileMed} />
        <Stack.Screen name="ChatboxMed" component={ChatboxMed} />
        <Stack.Screen name="ProfilePat" component={ProfilePat} />
     </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View> 
    </NavigationContainer>
 </>

 /* <>
    <View style={styles.container}>
      <Header/>
      <Id/>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View>
   </>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#14082b',
  },
  footerContainer: { backgroundColor: '#14082b' },
});
