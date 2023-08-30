/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import React, { createContext, useEffect, useContext, useCallback, useState } from 'react';
import { Column } from 'react-table';
import { usePersonalData } from '@/state/myGData/hooks';
import { api } from '@/config';
import { useUser } from '@/state/user/hooks';
import { createTableColumns, createTableData } from '@/lib';
import { Columns, TableName } from '@/types';

type AppContextType = {
  gTableColumns: Column<Columns>[];
  getAllConsentData: () => Promise<void>;
};
interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({
  gTableColumns: [],
  getAllConsentData: async () => {},
});

function AppProvider({ children }: IProps) {
  const { setPersonalData, setGData, setRData, setCData } = usePersonalData();
  const [gTableColumns, setGTableColumns] = useState<Column<Columns>[]>([]);
  const { user } = useUser();

  //* functions
  const getAllPersonalData = useCallback(async () => {
    const { data } = await api.get('api/personal_data_consents_rewards');
    const PData = createTableData({ tableName: TableName.PData, data: data.data });

    setPersonalData(PData);
  }, [setPersonalData]);

  const getAllConsentData = useCallback(async () => {
    const { data } = await api.get('api/user_consents_rewards');
    const rData = createTableData({ tableName: TableName.RData, data: data.data });
    const cData = createTableData({ tableName: TableName.CData, data: data.data });
    setRData(rData);
    setCData(cData);
  }, [setRData, setCData]);

  const getLastFivePersonalData = useCallback(async () => {
    const { data } = await api.get('api/user_personal_data/last_five');
    const gData = createTableData({ tableName: TableName.GData, data });
    const gDataTableColumns = createTableColumns(data);
    setGTableColumns(gDataTableColumns);
    setGData(gData);
  }, [setGData]);

  const initApp = useCallback(() => {
    getAllPersonalData();
    getLastFivePersonalData();
  }, [getAllPersonalData, getLastFivePersonalData]);

  useEffect(() => {
    if (!user) return;
    initApp();
  }, [user, initApp]);

  return <AppContext.Provider value={{ gTableColumns, getAllConsentData }}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
