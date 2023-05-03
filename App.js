import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import SignUpMed from './Components/SignUpMed';
import SignUpPat from './Components/SignUpPat';
import LoginMed from './Components/LoginMed';
import LoginPat from './Components/LoginPat';
import Id from './Components/Id'
import RF from './Components/RF';
import DocPat1 from './Components/DocPat1';
import DocPat2 from './Components/DocPat2';
import ProfileMed from './Components/ProfileMed';
import ProfilePat from './Components/ProfilePat';
import Submit from './Components/Submit';
import Input from './Components/Input';


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
import DoctorForm from './Components/Liste/DoctorForm';
import PatientForm from './Components/Liste/PatientForm';


import FamilyMedicine from './Components/Liste/Speciaties/FamilyMedicine';
import Cardiology from './Components/Liste/Speciaties/Cardiology';
import Gynecology from './Components/Liste/Speciaties/Gynecology';
import Neurology from './Components/Liste/Speciaties/Neurology';
import Pediatrics from './Components/Liste/Speciaties/Pediatrics';
import Ophthalmology from './Components/Liste/Speciaties/Ophthamology';
import Dermatology from './Components/Liste/Speciaties/Dermatology';
import Surgery from './Components/Liste/Speciaties/Surgery';
import Psychiatry from './Components/Liste/Speciaties/Psychiatry';
import Pulmonology from './Components/Liste/Speciaties/Pulmonology';
import Other from './Components/Liste/Speciaties/Other';
import Oncology from './Components/Liste/Speciaties/Oncology';
import Gastroenterology from './Components/Liste/Speciaties/Gastroenterology';
import AllergyAndImmunology from './Components/Liste/Speciaties/AllergyAndImmunology';
import Dentist from './Components/Liste/Speciaties/Dentist';
import Conversation from './Components/Liste/Conversation'

const Stack = createStackNavigator();


export default function App() {
  return (

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
        <Stack.Screen name="PatientForm" component={PatientForm} />
        <Stack.Screen name="BasicInformation" component={BasicInformation} />
        <Stack.Screen name="Diseases" component={Diseases} />
        <Stack.Screen name="Allergies" component={Allergies} />
        <Stack.Screen name="Vaccination" component={Vaccination} />
        <Stack.Screen name="MedicalSpecialties" component={MedicalSpecialties} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="Medications" component={Medications} />
        <Stack.Screen name="ChatboxPat" component={ChatboxPat} />
        <Stack.Screen name="FamilyMedicine" component={FamilyMedicine} />
        <Stack.Screen name="Cardiology" component={Cardiology} />
        <Stack.Screen name="Gynecology" component={Gynecology} />
        <Stack.Screen name="Neurology" component={Neurology} />
        <Stack.Screen name="Surgery" component={Surgery} />
        <Stack.Screen name="Psychiatry" component={Psychiatry} />
        <Stack.Screen name="Dermatology" component={Dermatology} />
        <Stack.Screen name="Ophthalmology" component={Ophthalmology} />
        <Stack.Screen name="Pediatrics" component={Pediatrics} />
        <Stack.Screen name="Dentist" component={Dentist} />
        <Stack.Screen name="AllergyAndImmunology" component={AllergyAndImmunology} />
        <Stack.Screen name="Gastroenterology" component={Gastroenterology} />
        <Stack.Screen name="Oncology" component={Oncology} />
        <Stack.Screen name="Pulmonology" component={Pulmonology} />
        <Stack.Screen name="Other" component={Other} />
        <Stack.Screen name ="Conversation" component={Conversation}/>
     </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
    
    </NavigationContainer>
 </>

 /*<>
    <View style={styles.container}>
      <Header/>
      <Doctors/>
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
