import {React, useContext, useEffect, useState} from 'react';
import {
  FlatList,
  useColorScheme,
  SafeAreaView,
  Button,
  View,
  Text,
} from 'react-native';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import CircularProgress from 'react-native-circular-progress-indicator';

import storage from '../../helpers/mmkv';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {AuthContext} from '../auth/AuthContext';
import Settings from '../../components/Settings';
import Loading from '../../components/Loading';

export default function Home({navigation}) {
  const [details, setDetails] = useState(null);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;
  const PrimaryRippleColor = isDarkMode ? '#00000080' : '#ffffff80';
  const SecondaryrippleColor = isDarkMode ? '#ffffff66' : '#00000066';
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const {year, session} = useContext(AuthContext);

  const [infoNavigated, setInfoNavigated] = useState(false);

  useEffect(() => {
    const checkValidity = async () => {
      const url =
        'https://hj7xp13cu8.execute-api.ap-south-1.amazonaws.com/Prod/api/v1/attendance';

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const cookie = storage.getString('cookie');
      const newCookie = cookie.slice(0, -1);

      const requestData = newCookie.concat(
        `,"year": ${year}, "session": "${session}"}`,
      );

      console.log(requestData);
      const requestOptions = {
        method: 'POST',
        headers,
        body: requestData,
        redirect: 'follow',
      };

      try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        setLoading(false);
        // console.log(data);

        if (response.status === 200) {
          console.log(data.faculty);
          setDetails(data);
        } else {
          // console.log(data);
        }
        // console.log(cookieValid);
      } catch (err) {
        console.log(err);
        // Handle errors, but do not set cookieValid to true in case of an error
      }
    };

    checkValidity();
  }, [year, session]);

  if (loading) return <Loading />;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1c1b1f'}}>
      <FlatList
        data={details?.faculty} // Include faculty names in the data array
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'column',
              // alignItems: 'baseline',
              justifyContent: 'space-between',
              marginTop: 8,
              marginBottom: 3,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: 'white',
              padding: 8,
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 19,
              shadowColor: 'black',
              shadowOffset: {width: 7, height: 7},
              shadowOpacity: 1,
              shadowRadius: 15,
              elevation: 5,
            }}>
            <View style={[styles.top]}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontFamily: 'Roboto-Large',
                  fontWeight: 'bold',
                }}>
                {details.subject[index]}
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Roboto-Large',
                  fontWeight: 'bold',
                }}>
                {item}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'red',
              }}>
              <View styles={[styles.bottom]}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#00be00',
                    fontFamily: 'Roboto-Large',
                    fontWeight: 'bold',
                  }}>
                  Total : {parseFloat(details.dayCount[index])}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#00be00',
                    fontFamily: 'Roboto-Large',
                    fontWeight: 'bold',
                  }}>
                  Present : {parseInt(details.presentCount[index])}
                </Text>

                <Text
                  style={[
                    styles.cell,
                    {
                      fontSize: 16,
                      color: '#00be00',
                      fontFamily: 'Roboto-Large',
                      fontWeight: 'bold',
                    },
                  ]}>
                  Absent : {parseInt(details.absentCount[index])}
                </Text>
              </View>

              <CircularProgress
                value={parseFloat(details.presentPercent[index])}
                inActiveStrokeColor={'grey'}
                inActiveStrokeOpacity={0.6}
                progressValueColor={'#00be00'}
                activeStrokeColor={'#00be00'}
                valueSuffix={'%'}
                radius={40}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = {
  top: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  bottom: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
