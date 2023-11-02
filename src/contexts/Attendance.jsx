import React, { createContext, useEffect, useState } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { ATTENDANCE } from '../constants/endpoints';
import storage from '../helpers/mmkv';
import useLogin from '../hooks/useLogin';

export const AttendanceContext = createContext();

export function AttendanceContextProvider({ children }) {
  const getInitialYearSession = () => {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'numeric' });
    const currentyear = parseInt(new Date().toLocaleString('en-US', { year: 'numeric' }), 10);
    if (currentMonth > 6) {
      return { session: 'Autumn', year: currentyear };
    }
    return { session: 'Spring', year: currentyear - 1 };
  };
  const [yearSession, setYearSession] = useState(getInitialYearSession);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [attendance, setAttendance] = useState([]);
  const { user } = useAuthContext();
  const { login } = useLogin();

  const getAttendance = async () => {
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

    return [response, json];
  };

  useEffect(() => {
    if (yearSession) {
      (async () => {
        setIsLoading(true);
        setError(null);

        const [response, json] = await getAttendance();

        if (!response.ok) {
          setError(json.error);
          if (json.error === 'invalid cookie') {
            console.log(json.error);
            const username = storage.getNumber('username');
            const password = storage.getString('password');
            await login(username, password);
          }
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
