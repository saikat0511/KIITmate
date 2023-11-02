import React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import useColors from '../hooks/useColors';
import AttendanceContainer from '../components/AttendanceContainer';
import YearSessionSelector from '../components/YearSessionSelector';
import useLogout from '../hooks/useLogout';

export default function Attendance() {
  const { logout } = useLogout();
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
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <YearSessionSelector />
          <IconButton
            icon="logout"
            size={32}
            onPress={() => logout()}
          />
        </View>
      </View>
      <AttendanceContainer />
    </SafeAreaView>
  );
}
