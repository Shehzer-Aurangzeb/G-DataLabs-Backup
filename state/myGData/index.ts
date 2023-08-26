import { createSlice } from '@reduxjs/toolkit';
import { MyGDataSliceType } from './types';

const initialState: MyGDataSliceType = {
  personalData: [],
};

const personalDataSlice = createSlice({
  name: 'my_g_data',
  initialState,
  reducers: {
    setPersonalDataAction: (
      state,
      action: {
        payload: MyGDataSliceType;
      },
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setPersonalDataAction } = personalDataSlice.actions;

export default personalDataSlice.reducer;
