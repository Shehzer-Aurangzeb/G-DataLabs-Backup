'use client';

import React, { createContext, useEffect, useContext, useMemo, useCallback } from 'react';
import { usePersonalData } from '@/state/myGData/hooks';
import { api } from '@/config';
import { useUser } from '@/state/user/hooks';
import { craeteTableData } from '@/lib';
import { TableName } from '@/types';

type AppContextType = {};
interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({});

function AppProvider({ children }: IProps) {
  const { setPersonalData } = usePersonalData();
  const { user } = useUser();
  const value = useMemo(() => ({}), []);

  const getAllPersonalData = useCallback(async () => {
    const { data } = await api.get('api/personal_data_consents_rewards');
    const personalData = craeteTableData({ tableName: TableName.PData, data: data.data });
    setPersonalData(personalData);
  }, [setPersonalData]);

  const initApp = useCallback(() => {
    getAllPersonalData();
  }, [getAllPersonalData]);
  useEffect(() => {
    if (!user) return;
    initApp();
  }, [user, initApp]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
