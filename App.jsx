import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './src/contexts/Auth';
import StackNavigator from './src/navigators/StackNavigator';

export default function App() {
  return (
    <AuthContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </AuthContextProvider>
  );
}
