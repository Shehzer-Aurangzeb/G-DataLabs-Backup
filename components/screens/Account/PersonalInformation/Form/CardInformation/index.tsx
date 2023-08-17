'use client';

import React from 'react';
import Input from '@/components/UI/Input';
import { FormikErrors, FormikTouched } from 'formik';

interface IProps {
  values: {
    nameOnCard?: string | undefined;
    cardNo?: number | undefined;
    cardExpiry?: number | undefined;
    cvv?: number | undefined;
  };
  touched: FormikTouched<{
    nameOnCard?: string | undefined;
    cardNo?: number | undefined;
    cardExpiry?: number | undefined;
    cvv?: number | undefined;
  }>;
  errors: FormikErrors<{
    nameOnCard?: string | undefined;
    cardNo?: number | undefined;
    cardExpiry?: number | undefined;
    cvv?: number | undefined;
  }>;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
}

function CardInformation({ values, touched, errors, handleChange }: IProps) {
  return (
    <div>
      <h1 className="text-primary text-2xl font-bold font-sans mt-8 mb-7">Card Information</h1>
      <div className="flex flex-row flex-wrap gap-x-14 gap-y-6 ">
        <Input
          label="Name on Card"
          placeholder="John Doe"
          name="nameOnCard"
          error={touched.nameOnCard && errors.nameOnCard}
          onChange={handleChange}
          value={values.nameOnCard}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Card No"
          placeholder="12115 54515 4545 5454"
          type="number"
          name="cardNo"
          error={touched.cardNo && errors.cardNo}
          onChange={handleChange}
          value={values.cardNo}
          className="max-w-[450px] w-full"
        />

        <Input
          label="Card Expiry"
          placeholder="11/23"
          type="number"
          name="cardExpiry"
          error={touched.cardExpiry && errors.cardExpiry}
          onChange={handleChange}
          value={values.cardExpiry}
          className="max-w-[450px] w-full"
        />
        <Input
          label="CVV"
          placeholder="235"
          type="number"
          name="cvv"
          error={touched.cvv && errors.cvv}
          onChange={handleChange}
          value={values.cvv}
          className="max-w-[450px] w-full"
        />
      </div>
    </div>
  );
}
export default CardInformation;
