import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useColors from '../hooks/useColorScheme';
import AttendanceContainer from '../components/AttendanceContainer';

export default function Attendance() {
  const { theme } = useColors();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AttendanceContainer />
    </SafeAreaView>
  );
}
