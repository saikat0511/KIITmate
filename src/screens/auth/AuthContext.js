import React, { createContext, useState, useEffect } from 'react';
import { setMilliseconds } from 'date-fns';
import storage from '../../helpers/mmkv';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [formDisabled, setFormDisabled] = useState(false);
  const [cookieValid, setCookieValid] = useState(false);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const y = storage.getString('year');
  const s = storage.getString('session');
  const [year, setYear] = useState(y || '2023');
  const [session, setSession] = useState(s || 'Autumn');

  useEffect(() => {
    const checkValidity = async () => {
      const url = 'https://hj7xp13cu8.execute-api.ap-south-1.amazonaws.com/Prod/api/v1/info';

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const cookie = storage.getString('cookie');

      const requestOptions = {
        method: 'POST',
        headers,
        body: cookie,
        redirect: 'follow',
      };

      try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        // console.log(data);
        setLoading(false);

        if (response.status === 200) {
          setCookieValid(true);
          // console.log(data);
          setDetails(data);
        } else {
          // console.log(data);
          setCookieValid(false);
        }
        // console.log(cookieValid);
      } catch (err) {
        // Handle errors, but do not set cookieValid to true in case of an error
        setCookieValid(false);
        // console.log(err);
      }
    };

    checkValidity();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        formDisabled,
        setFormDisabled,
        cookieValid,
        setCookieValid,
        year,
        setYear,
        session,
        setSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
