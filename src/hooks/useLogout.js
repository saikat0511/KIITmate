import storage from '../helpers/mmkv';
import useAuthContext from './useAuthContext';

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    storage.delete('username');
    storage.delete('password');
    storage.delete('cookie');
    storage.delete('timestamp');
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};

export default useLogout;
