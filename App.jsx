import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInStack from './src/navigators/LoggedInStack';
import LoggedOutStack from './src/navigators/LoggedOutStack';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <LoggedOutStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
