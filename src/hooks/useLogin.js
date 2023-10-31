import { useState } from 'react';
import storage from '../helpers/mmkv';
import { COOKIE } from '../constants/endpoints';
import useAuthContext from './useAuthContext';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(COOKIE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      // save user details in local storage
      storage.set('username', username);
      storage.set('password', password);
      storage.set('cookie', json.cookie);
      storage.set('timestamp', String(new Date()));

      // update auth context
      dispatch({ type: 'LOGIN', payload: { ...json, id: username } });
    }
    setIsLoading(false);
  };

  return {
    login, isLoading, error, setError,
  };
};

export default useLogin;
