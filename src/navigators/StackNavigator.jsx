import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthContext from '../hooks/useAuthContext';
import Login from '../screens/Login';
import AttendanceScreen from '../screens/AttendanceScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { user } = useAuthContext();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        user ? (
          <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
        )
          : (
            <Stack.Screen name="Login" component={Login} />
          )
      }
    </Stack.Navigator>
  );
}
