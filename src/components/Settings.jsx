import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import DropdownComponent from './DropDown';
import LoginButton from './LoginButton';
import {AuthContext} from '../screens/auth/AuthContext';
import storage from '../helpers/mmkv';
import {Button} from 'react-native-paper';
export default function Settings({navigation}) {
  const {year, setYear, setSession} = useContext(AuthContext);

  const [tyear, setTyear] = useState(null);
  const [tSession, setTsession] = useState(null);
  const [loading, setLoading] = useState(false);

  const yearData = [
      {label: '2020-21', value: '2020'},
      {label: '2021-22', value: '2021'},
      {label: '2022-23', value: '2022'},
      {label: '2023-24', value: '2023'},
    ],
    sessionData = [
      {label: 'Autumn', value: 'Autumn'},
      {label: 'Spring', value: 'Spring'},
    ];

  //   const onYearChange = value => {
  //     setTyear(value);
  //     // console.log(tyear);
  //     console.log(value);
  //   };

  const onSessionChange = () => {};

  const onPressHandler = () => {
    if (tyear && tSession) {
      setLoading(true);
      //   console.log(tyear);
      setYear(tyear);
      setSession(tSession);
      storage.set('year', tyear);
      storage.set('session', tSession);

      //   console.log('from mmkv', storage.getString('session'));

      //   navigation.navigate('Attendance');
      setTimeout(async () => {
        await navigation.navigate('Attendance');
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#1c1b1f'}}>
      <DropdownComponent
        passedData={yearData}
        ph="Year"
        value={tyear}
        setValue={setTyear}
      />
      <DropdownComponent
        passedData={sessionData}
        ph="Session"
        value={tSession}
        setValue={setTsession}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 20,
        }}>
        <Button
          mode="contained"
          //   rippleColor={'white'}
          loading={loading}
          contentStyle={{width: 125, height: 60, backgroundColor: '#00be00'}}
          labelStyle={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
          }}
          onPress={onPressHandler}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
