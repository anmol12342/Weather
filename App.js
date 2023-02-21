import React from "react";
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./NewProject -- Instagram/View/Login/index";
import homeScreen from "./NewProject -- Instagram/View/homePage/index";
import SignupScreen from "./NewProject -- Instagram/View/SignupScreen/index"
const  App = () => {
  const Stack = createNativeStackNavigator();
  return (  
    <NavigationContainer>
      {/* naviagation property is provided to us by stack navigator */}
      <Stack.Navigator initialRouteName="Login" 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="loginScreen" component={LoginPage} />
        <Stack.Screen name="homeScreen" component={homeScreen} />
        <Stack.Screen name="signupScreen" component={SignupScreen} />

    </Stack.Navigator>
    </NavigationContainer>
    
  )
}  

const styles = StyleSheet.create({});

export default App;
