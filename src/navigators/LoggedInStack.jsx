import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import {createDrawerNavigator, drawerIcon} from '@react-navigation/drawer';
import Info from '../screens/home/Info';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function LoggedInStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#00be00',
          borderWidth: 1,
          borderColor: 'grey',
          // borderRadius: 10,
          // Set the background color
        },
        headerTintColor: 'white', // Set the text color
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Roboto-Large',
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 22,
          fontFamily: 'Roboto-Large',
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#00be00',
        drawerInactiveTintColor: 'white',

        drawerStyle: {
          backgroundColor: 'grey',
        },
      }}>
      <Drawer.Screen
        name="Attendance"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Info"
        component={Info}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
