import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthContext, AuthProvider} from './src/screens/auth/AuthContext';
import {useContext} from 'react';

const rootComp = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
AppRegistry.registerComponent(appName, () => rootComp);
