import { useCallback } from 'react';
import { api } from '@/config';
import { useLoading } from '@/state/loading/hooks';
import { useUser } from '@/state/user/hooks';
import { UserType } from '@/state/user/types';
import { SignupCredentials, UserCredentials } from 'types';

export const useAuth = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { setUser } = useUser();

  const loginUser = useCallback(
    async (credentials: UserCredentials) => {
      try {
        setIsLoading(true);
        const { data } = await api.post('login_api', credentials);
        const user: UserType = {
          key: data.key,
          id: data.id,
          name: data.first_name + data.last_name,
        };
        setUser({ user, isAuthenticated: true });
      } catch (e) {
        console.log('e :>> ', e);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUser],
  );

  const registerUser = useCallback(
    async (credentials: SignupCredentials) => {
      try {
        setIsLoading(true);
        const { data } = await api.post('signup_api', credentials);
        console.log('data :>> ', data);
      } catch (e) {
        console.log('e :>> ', e);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading],
  );
  const logoutUser = useCallback(() => {
    // toast.success('Logout Successful.');
    setUser({ user: undefined, isAuthenticated: false });
  }, [setUser]);

  return {
    loginUser,
    logoutUser,
    isLoading,
    registerUser,
  };
};
