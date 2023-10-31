import { React } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AttendanceCard from '../../components/AttendanceCard';
import useColors from '../../hooks/useColors';

export default function Home() {
  const { theme } = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AttendanceCard />
      <AttendanceCard />
    </SafeAreaView>
  );
}
