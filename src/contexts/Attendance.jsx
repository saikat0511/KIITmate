import React, { createContext, useEffect, useState } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { ATTENDANCE } from '../constants/endpoints';

export const AttendanceContext = createContext();

export function AttendanceContextProvider({ children }) {
  const [yearSession, setYearSession] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [attendance, setAttendance] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'numeric' });
    const currentyear = parseInt(new Date().toLocaleString('en-US', { year: 'numeric' }), 10);
    if (currentMonth > 6) {
      setYearSession({ session: 'Autumn', year: currentyear });
    } else {
      setYearSession({ session: 'Spring', year: currentyear - 1 });
    }
  }, []);

  useEffect(() => {
    if (yearSession) {
      (async () => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(ATTENDANCE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cookie: user.cookie,
            year: yearSession.year,
            session: yearSession.session,
          }),
        });

        const json = await response.json();

        if (!response.ok) {
          setError(json.error);
        } else {
          const tempAttendance = [];
          for (let i = 0; i < json.subject.length; i += 1) {
            const sub = new Object();
            sub.subject = json.subject[i];
            sub.presentCount = json.presentCount[i];
            sub.absentCount = json.absentCount[i];
            sub.dayCount = json.dayCount[i];
            sub.presentPercent = json.presentPercent[i];
            sub.faculty = json.faculty[i];
            tempAttendance.push(sub);
          }
          setAttendance(tempAttendance);
        }
        setIsLoading(false);
      })();
    }
  }, [yearSession, user.cookie]);

  return (
    <AttendanceContext.Provider value={{
      yearSession, setYearSession, isLoading, attendance, error,
    }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}
