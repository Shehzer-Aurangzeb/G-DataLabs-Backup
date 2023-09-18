/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import React, { createContext, useEffect, useContext, useCallback, useState } from 'react';
import { Column } from 'react-table';
import { usePersonalData } from '@/state/myGData/hooks';
import { api } from '@/config';
import { useUser } from '@/state/user/hooks';
import { createScreenData, createTableColumns, createTableData } from '@/lib';
import { Columns, TableName } from '@/types';
import { useWeather } from '@/hooks/useWeather';
import { useChatBot } from '@/hooks/useChatBot';

type AppContextType = {
  gTableColumns: Column<Columns>[];
  getAllConsentData: () => Promise<void>;
  updateMyGData: () => Promise<void>;
  getAllPersonalData: () => void;
};
interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({
  gTableColumns: [],
  getAllConsentData: async () => {},
  updateMyGData: async () => {},
  getAllPersonalData: async () => {},
});

function AppProvider({ children }: IProps) {
  const { setPersonalData, setGData, setRData, setCData, setScreenData } = usePersonalData();
  const { fetchChatHistory, fetchRecentChats } = useChatBot();
  const [gTableColumns, setGTableColumns] = useState<Column<Columns>[]>([]);
  const { user } = useUser();
  //* weather hook
  useWeather();
  //* functions
  const getAllPersonalData = useCallback(async () => {
    const { data } = await api.get('api/personal_data_consents_rewards');
    const PData = createTableData({ tableName: TableName.PData, data: data.data });

    setPersonalData(PData);
  }, [setPersonalData]);

  const getAllConsentData = useCallback(async () => {
    const { data } = await api.get('api/user_consents_rewards');
    const rData = createTableData({ tableName: TableName.RData, data: data.data });
    const consentTableData = createTableData({ tableName: TableName.CData, data: data.data });
    setRData(rData);
    setCData(consentTableData);
  }, [setRData, setCData]);

  const getLastFivePersonalData = useCallback(async () => {
    const { data } = await api.get('api/user_personal_data/last_five');
    const gData = createTableData({ tableName: TableName.GData, data });
    if (data.length === 0) return;
    const gDataTableColumns = createTableColumns(data);
    setGTableColumns(gDataTableColumns);
    setGData(gData);
  }, [setGData]);

  const getAllScreenData = useCallback(async () => {
    try {
      const { data } = await api.get('api/file-data/');
      const screenData = createScreenData(data.data);
      setScreenData(screenData);
    } catch (e) {
      // console.log('e :>> ', e);
    }
  }, [setScreenData]);

  const initApp = useCallback(() => {
    getAllPersonalData();
    getLastFivePersonalData();
    fetchChatHistory();
    fetchRecentChats();
    getAllConsentData();
    getAllScreenData();
  }, [
    getAllPersonalData,
    getLastFivePersonalData,
    getAllConsentData,
    fetchChatHistory,
    getAllScreenData,
    fetchRecentChats,
  ]);

  //* initialize the app.
  useEffect(() => {
    if (!user) return;
    initApp();
  }, [user, initApp]);

  return (
    <AppContext.Provider
      value={{ gTableColumns, getAllConsentData, updateMyGData: getLastFivePersonalData, getAllPersonalData }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
