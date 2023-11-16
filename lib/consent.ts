import { DropDownOption } from '@/types';

/* eslint-disable no-restricted-syntax */
export const createConsentTableState = (
  tableData: {
    PDataAndWeb: string;
    Companies: DropDownOption;
    Use: { [key: string]: string };
    Pricing: { [key: string]: string };
    Threshold: { [key: string]: number };
  }[],
) => {
  const result: {
    [key: string]: {
      use: { [key: string]: string };
      pricing: { [key: string]: string };
      threshold: { [key: string]: number };
    };
  } = {};
  for (const d of tableData) {
    result[d.PDataAndWeb] = {
      use: d.Use,
      pricing: d.Pricing,
      threshold: d.Threshold,
    };
  }
  return result;
};

export const createFieldToCompanyMapping = (
  tableData: {
    PDataAndWeb: string;
    Companies: { label: string; value: string }[];
  }[],
) => {
  const result: { [key: string]: string } = {};
  for (const d of tableData) {
    result[d.PDataAndWeb] = d.Companies.length > 0 ? d.Companies[0].value : '';
  }

  return result;
};

export const createCompanyToFieldMapping = ({
  fieldName,
  data,
}: {
  fieldName: 'usage' | 'demanded_reward_value' | 'threshold';
  data: {
    company_name: string;
    usage: string;
    demanded_reward_value: string;
    threshold: number;
  }[];
}) => {
  const result: { [key: string]: string } = {};
  for (const d of data) {
    result[d.company_name] = d[fieldName].toString();
  }
  return result;
};
