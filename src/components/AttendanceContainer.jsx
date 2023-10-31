import React from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAttendanceContext from '../hooks/useAttendanceContext';
import AttendanceCard from './AttendanceCard';

export default function AttendanceContainer() {
  const {
    isLoading, attendance,
  } = useAttendanceContext();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: '3%', paddingBottom: insets.bottom }}>
      {
        isLoading && <ActivityIndicator size={60} />
      }
      {
        !isLoading && attendance.map((sub) => (
          <AttendanceCard
            key={sub.subject}
            subject={sub.subject}
            faculty={sub.faculty}
            dayCount={sub.dayCount}
            presentCount={sub.presentCount}
            presentPercent={sub.presentPercent}
          />
        ))
      }
    </ScrollView>
  );
}
