import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { useContext } from 'react';
import App from './App';
import { name as appName } from './app.json';
import { AuthContext, AuthProvider } from './src/screens/auth/AuthContext';

const rootComp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
AppRegistry.registerComponent(appName, () => rootComp);
