import { createSlice } from '@reduxjs/toolkit';
import { Data, MyGDataSliceType } from './types';

const initialState: MyGDataSliceType = {
  personalData: {},
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
  },
});

export const { setPersonalDataAction } = personalDataSlice.actions;

export default personalDataSlice.reducer;
