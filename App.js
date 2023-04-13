/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';



import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import SignUpMed from './Components/SignUpMed';
import SignUpPat from './Components/SignUpPat';
import LoginMed from './Components/LoginMed';
import LoginPat from './Components/LoginPat';
import IdRF from './Components/IdRF'
import DocPat from './Components/DocPat';
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



export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Header/>
      <ChatboxPat/>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View>
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




//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import Animated from 'react-native-reanimated';


/*const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Welcome} />
      <Drawer.Screen name="Doctor Login" component={LoginMed} />
      <Drawer.Screen name="Patient Login" component={LoginPatient} />
      <Drawer.Screen name="Doctor SignUp" component={SignUpMed} />
      <Drawer.Screen name="Patient SignUp" component={SignUpPat} />
    </Drawer.Navigator>
  );
}*/

  /*return (
    <>
    <NavigationContainer>
    <View style={styles.container}>
      <Header/>
      <MyDrawer />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View>
    </NavigationContainer>
   </>
  );
}*/