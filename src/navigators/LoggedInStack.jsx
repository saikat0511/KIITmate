import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import {createDrawerNavigator, drawerIcon} from '@react-navigation/drawer';
import Info from '../screens/home/Info';
import CustomDrawer from '../components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../screens/auth/AuthContext';
import {View, Text} from 'react-native';
import Settings from '../components/Settings';

const Drawer = createDrawerNavigator();

export default function LoggedInStack() {
  const {year, session} = useContext(AuthContext);
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
          backgroundColor: '#1c1b1f',
        },
      }}>
      <Drawer.Screen
        name="Attendance"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home" size={22} color={color} />
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto-Large',
                    // marginRight: 100,
                  }}>
                  Attendance
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto-Large',
                    color: 'white',
                  }}>
                  {year}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto-Large',
                    color: 'white',
                  }}>
                  {session}
                </Text>
              </View>
            </View>
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

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="information-circle" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
