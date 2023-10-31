import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import useColors from '../hooks/useColors';
import AttendanceContainer from '../components/AttendanceContainer';
import YearSessionSelector from '../components/YearSessionSelector';

export default function Attendance() {
  const { theme } = useColors();

  return (
    <SafeAreaView
      edges={['top', 'right', 'left']}
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '3%',
      }}
      >
        <View style={{ justifyContent: 'center' }}>
          <Text variant="headlineLarge">Attendance</Text>
        </View>
        <YearSessionSelector />
      </View>
      <AttendanceContainer />
    </SafeAreaView>
  );
}
