import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AuthContextProvider } from './src/contexts/Auth';
import StackNavigator from './src/navigators/StackNavigator';
import useColors from './src/hooks/useColors';

export default function App() {
  const { theme, isDarkMode } = useColors();
  return (
    <AuthContextProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </AuthContextProvider>
  );
}
