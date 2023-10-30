import React from 'react';
import { ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import useAttendanceContext from '../hooks/useAttendanceContext';
import AttendanceCard from './AttendanceCard';

export default function AttendanceContainer() {
  const {
    isLoading, attendance,
  } = useAttendanceContext();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: '3%' }}>
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
