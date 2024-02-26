import axios from 'axios';
// import { api } from '@/config';

import { useCallback } from 'react';

type PERSONALData = {
  personal_data_field_id: Number;
  amount: Number;
  quantity: number;
};
export const useSellData = () => {
  const fetchData = useCallback(async (personalData: PERSONALData) => {
    try {
      const response = await axios.post('https://api.g-datalabs.com/api/user_consent_deals', personalData, {});
      console.log('Response:', response.data);
      // Handle response data as needed
    } catch (error) {
      // Handle error
    }
  }, []);

  return fetchData;
};
