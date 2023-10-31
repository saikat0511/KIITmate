import { useState } from 'react';
import { ATTENDANCE } from '../constants/endpoints';
import useAttendanceContext from './useAttendanceContext';
import useAuthContext from './useAuthContext';

const useAttendance = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [attendance, setAttendance] = useState(null);
  const { session, year } = useAttendanceContext();
  const { user } = useAuthContext();

  const getAttendance = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(ATTENDANCE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cookie: user.cookie, year, session }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setAttendance(json);
    }
    setIsLoading(false);
  };

  return {
    getAttendance, attendance, isLoading, error,
  };
};

export default useAttendance;
