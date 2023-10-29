import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthContext from '../hooks/useAuthContext';
import Home from '../screens/home/Home';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { user } = useAuthContext();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        user ? (
          <Stack.Screen name="Home" component={Home} />
        )
          : (
            <Stack.Screen name="Login" component={Login} />
          )
      }
    </Stack.Navigator>
  );
}
