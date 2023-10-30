import React from 'react';
import { AttendanceContextProvider } from '../contexts/Attendance';
import Attendance from './Attendance';

export default function AttendanceScreen() {
  return (
    <AttendanceContextProvider>
      <Attendance />
    </AttendanceContextProvider>
  );
}
