import {
  React, createContext, useEffect, useReducer,
} from 'react';
import storage from '../helpers/mmkv';

export const AuthContext = createContext();

const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return prevState;
  }
};

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    if (storage.contains('cookie')) {
      dispatch({ type: 'LOGIN', payload: { cookie: storage.getString('cookie') } });
    }
  }, []);

  // console.log(state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
