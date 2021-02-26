import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';

import MemoList from './src/components/MemoList';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Login"
       screenOptions={{
        headerStyle: {backgroundColor: '#467FD3'},
        headerTitleStyle : {color: '#ffffff'},
        headerTitle: 'Memo App',
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestreEnabled : true,
        gestureDirection : 'horizontal',
       }}>
        <Stack.Screen name='MemoList' component={MemoListScreen}/>
        <Stack.Screen name='MemoDetail' component={MemoDetailScreen}/>
        <Stack.Screen name='MemoEdit' component={MemoEditScreen}/>
        <Stack.Screen name='MemoCreate' component={MemoCreateScreen}/>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options = {{
            cardStyleInterpolator : CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          />
        <Stack.Screen 
          name='Signup'   
          component={SignupScreen}
          options = {{
            cardStyleInterpolator : CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 



  

});
