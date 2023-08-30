import { createSlice } from '@reduxjs/toolkit';
import { Data, MyGDataSliceType } from './types';

const initialState: MyGDataSliceType = {
  personalData: {},
  gData: {},
  rData: {},
  cData: {},
};

const personalDataSlice = createSlice({
  name: 'my_g_data',
  initialState,
  reducers: {
    setPersonalDataAction: (
      state,
      action: {
        payload: Data;
      },
    ) => ({
      ...state,
      personalData: {
        ...state.personalData,
        ...action.payload,
      },
    }),
    setGDataAction: (
      state,
      action: {
        payload: Data;
      },
    ) => ({
      ...state,
      gData: action.payload,
    }),
    setRDataAction: (
      state,
      action: {
        payload: Data;
      },
    ) => ({
      ...state,
      rData: action.payload,
    }),
    setCDataAction: (
      state,
      action: {
        payload: Data;
      },
    ) => ({
      ...state,
      cData: action.payload,
    }),
  },
});

export const { setPersonalDataAction, setGDataAction, setRDataAction, setCDataAction } = personalDataSlice.actions;

export default personalDataSlice.reducer;
