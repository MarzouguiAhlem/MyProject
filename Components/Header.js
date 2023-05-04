import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.wrapper}>
        <Image
          style={headerStyles.logo}
          source={require('./img/logo.jpg')}
          resizeMode="contain"
          accessibilityLabel="MyHealthMate Logo"
        />
        <Text style={headerStyles.title}>MyHealthMate</Text>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#7C3AED',
    paddingTop: 40,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 5,
  },
});
