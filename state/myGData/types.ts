export type Data = {
  [key: string]: {
    [key: string]: {};
  };
};

export type MyGDataSliceType = {
  personalData: Data;
  gData: Data;
  rData: Data;
  cData: Data;
};

export type UpdateConsentRewardType = {
  demanded_reward_value?: Number;
  consents_to_sell?: boolean;
};
