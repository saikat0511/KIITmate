import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {AuthContext} from '../screens/auth/AuthContext';
import storage from '../helpers/mmkv';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomDrawer(props) {
  const {setCookieValid} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 3,
          padding: 5,
          borderColor: 'grey',
          padding: 10,
          paddingLeft: 20,
          borderBottomWidth: 1,
          backgroundColor: '#00be00',
        }}>
        <Ionicons name="person" size={22} color="white" />
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Roboto-Large',
            marginLeft: 5,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {storage.getString('username')}
        </Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <TouchableOpacity
          onPress={() => setCookieValid(false)}
          style={{marginLeft: 20, paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit" size={22} color="white" />
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Roboto-Large',
                marginLeft: 5,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
