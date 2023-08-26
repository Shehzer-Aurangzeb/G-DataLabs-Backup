import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState, useAppDispatch } from 'state/store';
import { setPersonalDataAction } from '.';
import { MyGDataSliceType } from './types';

export const usePersonalData = () => {
  const { personalData } = useSelector<RootState, MyGDataSliceType>((state) => state.my_g_data);
  const dispatch = useAppDispatch();

  const setPersonalData = useCallback(
    (payload: MyGDataSliceType) => {
      dispatch(setPersonalDataAction(payload));
    },
    [dispatch],
  );

  return {
    setPersonalData,
    personalData,
  };
};
