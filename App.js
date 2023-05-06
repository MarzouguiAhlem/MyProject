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
import Dentist  from './Components/Liste/Speciaties/Dentist';
import Dentist2 from './Components/Liste/Speciaties/Dentist2';
import FamilyMedicine2 from './Components/Liste/Speciaties/FamilyMedicine2';
import Cardiology2 from './Components/Liste/Speciaties/Cardiology2';
import Gynecology2 from './Components/Liste/Speciaties/Gynecology2';
import Neurology2 from './Components/Liste/Speciaties/Neurology2';
import Pediatrics2 from './Components/Liste/Speciaties/Pediatrics2';
import Ophthalmology2 from './Components/Liste/Speciaties/Ophthamology2';
import Dermatology2 from './Components/Liste/Speciaties/Dermatology2';
import Surgery2 from './Components/Liste/Speciaties/Surgery2';
import Psychiatry2 from './Components/Liste/Speciaties/Psychiatry2';
import Pulmonology2 from './Components/Liste/Speciaties/Pulmonology2';
import Other2 from './Components/Liste/Speciaties/Other2';
import Oncology2 from './Components/Liste/Speciaties/Oncology2';
import Gastroenterology2 from './Components/Liste/Speciaties/Gastroenterology2';
import AllergyAndImmunology2 from './Components/Liste/Speciaties/AllergyAndImmunology2';

import Conversation from './Components/Liste/Conversation'
import Conversation2 from './Components/Liste/Conversation2'
import Patients from './Components/Liste/Patients'
import DocPatProfile from './Components/Liste/DocPatProfile'
import Allergies2 from './Components/Liste/Allergies2'
import Basic2 from './Components/Liste/Basic2'
import Vaccinations2 from './Components/Liste/Vaccinations2'
import Medications2 from './Components/Liste/Medications2'
import Diseases2 from './Components/Liste/Diseases2'
import MedicalSpecialties2 from './Components/Liste/MedicalSpecialties2'
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
        
        <Stack.Screen name="FamilyMedicine2" component={FamilyMedicine2} />
        <Stack.Screen name="Cardiology2" component={Cardiology2} />
        <Stack.Screen name="Gynecology2" component={Gynecology2} />
        <Stack.Screen name="Neurology2" component={Neurology2} />
        <Stack.Screen name="Surgery2" component={Surgery2} />
        <Stack.Screen name="Psychiatry2" component={Psychiatry2} />
        <Stack.Screen name="Dermatology2" component={Dermatology2} />
        <Stack.Screen name="Ophthalmology2" component={Ophthalmology2} />
        <Stack.Screen name="Pediatrics2" component={Pediatrics2} />
        <Stack.Screen name="Dentist2" component={Dentist2} />
        <Stack.Screen name="AllergyAndImmunology2" component={AllergyAndImmunology2} />
        <Stack.Screen name="Gastroenterology2" component={Gastroenterology2} />
        <Stack.Screen name="Oncology2" component={Oncology2} />
        <Stack.Screen name="Pulmonology2" component={Pulmonology2} />
        <Stack.Screen name="Other2" component={Other2} />
        <Stack.Screen name ="Conversation" component={Conversation}/>
        <Stack.Screen name ="Conversation2" component={Conversation2}/>
        <Stack.Screen name ="Patients" component={Patients}/>
        <Stack.Screen name ="DocPatProfile" component={DocPatProfile}/>
        <Stack.Screen name ="Vaccinations2" component={Vaccinations2}/>
        <Stack.Screen name ="Allergies2" component={Allergies2}/>
        <Stack.Screen name ="Medications2" component={Medications2}/>
        <Stack.Screen name ="Diseases2" component={Diseases2}/>
        <Stack.Screen name ="Basic2" component={Basic2}/>
        <Stack.Screen name ="MedicalSpecialties2" component={MedicalSpecialties2}/>
        
     </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
    
    </NavigationContainer>
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#14082b',
  },
  footerContainer: { backgroundColor: '#14082b' },
});
