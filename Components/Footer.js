import * as React from 'react' ;
import { Text, View, StyleSheet } from 'react-native';


export default function Footer() { 
    return ( 
        <View style={{backgroundColor: '#c2bccf', marginBottom: 20 }}> 
            <Text style={footerStyles.footerText}>    
                All rights reserved by MyHealthMate, 2023
            </Text> 
        </View> 
    ); 
} 
const footerStyles = StyleSheet.create({
footerText: { 
    fontSize: 16, 
    color: '#14082b', 
    textAlign: 'center', 
    fontStyle: 'italic', 
    }
})