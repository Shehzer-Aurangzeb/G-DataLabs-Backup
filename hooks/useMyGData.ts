'use client';

import { useCallback } from 'react';
import { api } from '@/config';
import { useLoading } from '@/state/loading/hooks';
import { usePersonalData } from '@/state/myGData/hooks';
import { PersonalDataSchemaType } from '@/schema';
import { createTableData, createPayload } from '@/lib';
import { TableName } from '@/types';
import { UpdateConsentRewardType } from '@/state/myGData/types';
import { useApp } from '@/context/AppProvider';

export const useMyGData = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { personalData, setPersonalData, gData, rData, cData, screenData } = usePersonalData();
  const { getAllConsentData } = useApp();
  const savePersonalData = useCallback(
    async (personal_data: PersonalDataSchemaType) => {
      try {
        setIsLoading(true);
        const payload = createPayload(personal_data);
        const { data } = await api.post('api/personal_data_consents_rewards', payload);
        const newData = createTableData({ tableName: TableName.PData, data: data.data });
        setPersonalData(newData);
      } catch (e) {
        // console.log('e :>> ', e);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setPersonalData],
  );

  const updateConsentRewards = useCallback(
    async (arg: { id: number; payload: UpdateConsentRewardType }) => {
      const { id, payload } = arg;
      try {
        setIsLoading(true);
        await api.patch(`api/user_consents_rewards/${id}/`, payload);
        await getAllConsentData();
      } catch (e) {
        // console.log('e :>> ', e);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, getAllConsentData],
  );

  return {
    savePersonalData,
    isLoading,
    personalData,
    updateConsentRewards,
    gData,
    rData,
    cData,
    screenData,
  };
};
