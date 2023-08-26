export type Data = {
  consents_to_sell: boolean;
  created_at: string;
  demanded_reward_value: string;
  id: number;
  personal_data_field: {
    field_name: string;
    user_id: number;
  };
  personal_data_field_id: number;
  value: string;
};

export type MyGDataSliceType = {
  personalData: Data[];
};
