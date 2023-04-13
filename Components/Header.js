import * as React from 'react' ;
import { Text, View, StyleSheet, Image } from 'react-native';


export default function Header () {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.Wrapper}>
      <Image
          style={headerStyles.image}
          source={require('./img/logo.jpg')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'MyHealthMate Logo'}
        />
      <Text style={headerStyles.headerText} >
      MyHealthMate  
      </Text>
      </View>
    </View>
  );
}
const headerStyles = StyleSheet.create({
  container: { 
    backgroundColor: '#c2bccf', 
    flex: 0.2
  },
  headerText: {
    paddingRight: 40,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 26,
    color: '#14082b',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 50,
    marginTop: 35,
    padding: 20,
    height: 50,
    borderRadius: 10,
  },
  Wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin:20,
  },
});