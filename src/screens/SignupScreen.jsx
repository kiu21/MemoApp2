import React from 'react';
import {
  View, Text,TextInput, StyleSheet 
} from 'react-native';


import AppBar from '../components/AppBar';
import Button from '../components/button';

export default function SignupScreen(){

  return(
    <View style={styles.container}>
      <AppBar/>
      <View style={styles.inner}>
        <Text style={styles.title}>Signup</Text>
        <TextInput style={styles.input} value="Email Adress"/>
        <TextInput style={styles.input} value="password"/>
        <View style={styles.buttonContainer}>
          <Button label="submit"/>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registere?</Text>
          <Text style={styles.footerLink}>Login here!</Text>
        </View>

      </View>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner:{
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title:{
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input:{
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footer:{
    flexDirection: 'row',
  },
  footerText:{
    fontSize: 14,
    lineHeight: 24,
    marginRight:8,
  },
  footerLink:{
    fontSize: 14,
    lineHeight: 24,
    color: '#ffffff',
  }

});