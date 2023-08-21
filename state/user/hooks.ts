import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { RootState, useAppDispatch } from 'state/store';
import { deleteUserInfoFromLocalStorage, saveUserInfoInLocalStorage, getUserInfoFromLocalStorage } from '@/lib/cache';
import { setUserAction } from '.';
import { UserSliceType } from './types';

export const useUser = () => {
  const { isAuthenticated, user } = useSelector<RootState, UserSliceType>((state) => state.user);
  const dispatch = useAppDispatch();

  const setUser = useCallback(
    (payload: UserSliceType) => {
      dispatch(setUserAction(payload));
      if (payload.user) saveUserInfoInLocalStorage(payload.user);
      else deleteUserInfoFromLocalStorage();
    },
    [dispatch],
  );

  useEffect(() => {
    const userInfo = getUserInfoFromLocalStorage();
    if (userInfo && !user) setUser({ user: userInfo, isAuthenticated: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isAuthenticated,
    user,
    setUser,
  };
};
