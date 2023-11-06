'use client';

import React, { createContext, useEffect, useContext, useCallback, useState, useMemo } from 'react';
import { Column } from 'react-table';
import { AxiosError } from 'axios';
import { usePersonalData } from '@/state/myGData/hooks';
import { api } from '@/config';
import { useUser } from '@/state/user/hooks';
import { createScreenData, createTableColumns, createTableData } from '@/lib';
import { Columns, TableName } from '@/types';
import { useWeather } from '@/hooks/useWeather';
import { useChatBot } from '@/hooks/useChatBot';
import { useAuth } from '@/hooks/useAuth';

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
  const { logoutUser } = useAuth();

  //* weather hook
  useWeather();
  //* functions
  const getAllPersonalData = useCallback(async () => {
    try {
      const { data } = await api.get('api/personal_data_consents_rewards');
      const PData = createTableData({ tableName: TableName.PData, data: data.data });
      setPersonalData(PData);
    } catch (e) {
      if (
        e instanceof AxiosError &&
        (e.response?.status === 401 || e.response?.data.msg === 'Token has expired') &&
        user
      ) {
        logoutUser();
      }
    }
  }, [setPersonalData, logoutUser, user]);

  const getAllConsentData = useCallback(async () => {
    try {
      const { data } = await api.get('api/user_consents_rewards');
      const rData = createTableData({ tableName: TableName.RData, data: data.data });
      const consentTableData = createTableData({ tableName: TableName.CData, data: data.data });
      setRData(rData);
      setCData(consentTableData);
    } catch (e) {
      if (
        e instanceof AxiosError &&
        (e.response?.status === 401 || e.response?.data.msg === 'Token has expired') &&
        user
      ) {
        logoutUser();
      }
    }
  }, [setRData, setCData, logoutUser, user]);

  const getLastFivePersonalData = useCallback(async () => {
    try {
      const { data } = await api.get('api/user_personal_data/last_five');
      const gData = createTableData({ tableName: TableName.GData, data });
      if (data.length === 0) return;
      const gDataTableColumns = createTableColumns(data);
      setGTableColumns(gDataTableColumns);
      setGData(gData);
    } catch (e) {
      if (
        e instanceof AxiosError &&
        (e.response?.status === 401 || e.response?.data.msg === 'Token has expired') &&
        user
      ) {
        logoutUser();
      }
    }
  }, [setGData, logoutUser, user]);

  const getAllScreenData = useCallback(async () => {
    try {
      const { data } = await api.get('api/file-data/');
      const screenData = createScreenData(data.data);
      setScreenData(screenData);
    } catch (e) {
      if (
        e instanceof AxiosError &&
        (e.response?.status === 401 || e.response?.data.msg === 'Token has expired') &&
        user
      ) {
        logoutUser();
      }
    }
  }, [setScreenData, logoutUser, user]);

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

  // values
  const value = useMemo(
    () => ({ gTableColumns, getAllConsentData, updateMyGData: getLastFivePersonalData, getAllPersonalData }),
    [gTableColumns, getAllConsentData, getLastFivePersonalData, getAllPersonalData],
  );

  //* initialize the app.
  useEffect(() => {
    if (!user) return;
    initApp();
  }, [user, initApp]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
