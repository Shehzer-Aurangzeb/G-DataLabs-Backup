/* eslint-disable @typescript-eslint/naming-convention */

'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { api } from '@/config';
import { useLoading } from '@/state/loading/hooks';
import { useUser } from '@/state/user/hooks';
import { UserType } from '@/state/user/types';
import { SignupCredentials, UpdateUserPayloadType, UserCredentials } from 'types';
import { PATHS } from '@/constants';
import { generateAvatar } from '@/lib';
import { useChats } from '@/state/chats/hooks';

export const useAuth = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { setUser, isAuthenticated, user } = useUser();
  const { deleteChats } = useChats();
  const router = useRouter();
  const getUserInfo = useCallback(async (token: string) => {
    const { data } = await api.get('api/user_profile/1/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { email, first_name, last_name, phone_number, total_rewards, username, id } = data.data;
    let { image } = data.data;
    if (!image) {
      image = generateAvatar(first_name);
    }
    const userInfo: UserType = {
      email,
      firstName: first_name,
      lastName: last_name,
      id,
      username,
      image,
      phoneNumber: phone_number,
      totalRewards: total_rewards,
      key: '',
    };

    return userInfo;
  }, []);
  const loginUser = useCallback(
    async (credentials: UserCredentials) => {
      try {
        setIsLoading(true);
        const { data } = await api.post('login_api', credentials);
        const userInfo = await getUserInfo(data.access_token);
        const payload: UserType = {
          ...userInfo,
          key: data.access_token,
        };

        setUser({ user: payload, isAuthenticated: true });
        router.replace(PATHS.HOME);
        toast.success('Welcome to G-Data Labs');
      } catch (e) {
        if (e instanceof AxiosError) toast.error(e.response?.data.error);
        else toast.error('Something went wrong ');
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUser, router, getUserInfo],
  );

  const updateUser = useCallback(
    async (payload: UpdateUserPayloadType) => {
      try {
        setIsLoading(true);
        const { data } = await api.patch('api/user_profile/1/', payload);
        let { image } = data.data;
        if (!image) {
          image = generateAvatar(data.data.first_name);
        }
        const updatedUserInfo: UserType = {
          firstName: data.data.first_name,
          lastName: data.data.last_name,
          phoneNumber: data.data.phone_number,
          totalRewards: data.data.total_rewards,
          email: data.data.email,
          image,
          username: data.data.username,
          id: data.data.id,
          key: user?.key!,
        };
        setUser({ user: updatedUserInfo, isAuthenticated: true });
        toast.success('Personal information updated successfully');
      } catch (e) {
        if (e instanceof AxiosError) toast.error(e.response?.data.error);
        else toast.error('Something went wrong ');
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setUser, user],
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
        router.replace(PATHS.LOGIN);
      } catch (e) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, router],
  );
  const logoutUser = useCallback(() => {
    setUser({ user: undefined, isAuthenticated: false });
    deleteChats();
    toast.success('Logout Successful.');
    router.replace(PATHS.LOGIN);
  }, [setUser, router, deleteChats]);

  return {
    loginUser,
    logoutUser,
    isLoading,
    registerUser,
    isAuthenticated,
    user,
    updateUser,
  };
};
