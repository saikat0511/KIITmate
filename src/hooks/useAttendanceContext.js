import { useContext } from 'react';
import { AttendanceContext } from '../contexts/Attendance';

const useAttendanceContext = () => {
  const context = useContext(AttendanceContext);
  if (!context) {
    throw Error('AttendanceContext must be used inside AttendanceContextProvider');
  }

  return context;
};

export default useAttendanceContext;
