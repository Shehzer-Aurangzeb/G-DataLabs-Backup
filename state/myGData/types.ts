export type Data = {
  [key: string]: {
    [key: string]: {};
  };
};
export type CData = { [key: string]: {} };
export type ScreenDataType = {
  id: number;
  screenRecording: string;
  cameraRecording: string;
  date: string;
  detail: string;
};
export type MyGDataSliceType = {
  personalData: Data;
  gData: Data;
  rData: Data;
  cData: CData;
  compData: CData;
  screenData: ScreenDataType[];
};

export type UpdateConsentRewardType = {
  demanded_reward_value?: Number;
  consents_to_sell?: boolean;
};

export type UpdateConsentCompanyType = {
  use: string;
  threshold: string;
  pricing: string;
  consents_to_buy: boolean;
};
