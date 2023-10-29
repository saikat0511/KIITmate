import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('AuthContext must be used inside AuthContextProvider');
  }

  return context;
};

export default useAuthContext;
