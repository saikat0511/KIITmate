import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

export default function LoggedOutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScren" component={LoginScreen} />
    </Stack.Navigator>
  );
}
