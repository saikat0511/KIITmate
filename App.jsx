import React, {useEffect, useState, useContext} from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import LoggedInStack from './src/navigators/LoggedInStack';
import LoggedOutStack from './src/navigators/LoggedOutStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider, AuthContext} from './src/screens/auth/AuthContext';
import storage from './src/helpers/mmkv';
import Home from './src/screens/home/Home';
import Login from './src/screens/login/Login';
import {Screen} from 'react-native-screens';
import {Button, View, Text} from 'react-native';
import Loading from './src/components/Loading';

export default function App() {
  const {cookieValid, loading} = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <PaperProvider>
        <NavigationContainer>
          {cookieValid ? <LoggedInStack /> : <LoggedOutStack />}
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
