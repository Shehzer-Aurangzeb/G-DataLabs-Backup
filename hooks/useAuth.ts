'use client';

import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { api } from '@/config';
import { useLoading } from '@/state/loading/hooks';
import { useUser } from '@/state/user/hooks';
import { UserType } from '@/state/user/types';
import { SignupCredentials, UserCredentials } from 'types';
import { PATHS } from '@/constants';

export const useAuth = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { setUser, isAuthenticated, user } = useUser();
  const router = useRouter();

  const loginUser = useCallback(
    async (credentials: UserCredentials) => {
      try {
        setIsLoading(true);
        const { data } = await api.post('login_api', credentials);
        const userInfo: UserType = {
          key: data.access_token,
          id: uuidv4(),
          name: 'John Doe',
        };

        setUser({ user: userInfo, isAuthenticated: true });
        router.replace(PATHS.HOME);
        toast.success('Welcome to G-Data Labs');
      } catch (e) {
        if (e instanceof AxiosError) toast.error(e.response?.data.error);
        else toast.error('Something went wrong ');
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUser, router],
  );

  const registerUser = useCallback(
    async (credentials: SignupCredentials) => {
      try {
        setIsLoading(true);
        const { data } = await api.post('signup_api', credentials);
        if (data.error) {
          toast.error(data.error);
          return;
        }
        if (data.access_token) {
          const userInfo: UserType = {
            key: data.access_token,
            id: uuidv4(),
            name: 'John Doe',
          };

          setUser({ user: userInfo, isAuthenticated: true });
          router.replace(PATHS.HOME);
          toast.success('Welcome to G-Data Labs');
        }
      } catch (e) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUser, router],
  );
  const logoutUser = useCallback(() => {
    setUser({ user: undefined, isAuthenticated: false });
    toast.success('Logout Successful.');
    router.replace(PATHS.LOGIN);
  }, [setUser, router]);

  return {
    loginUser,
    logoutUser,
    isLoading,
    registerUser,
    isAuthenticated,
    user,
  };
};
