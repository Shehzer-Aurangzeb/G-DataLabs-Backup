/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-return-assign  */

'use client';

import React, { useState } from 'react';
import Input from '@/components/UI/Input';
import { maxWidth } from '@/constants';
import Button from '@/components/UI/Button';
import { usePathname } from 'next/navigation';
import { DATATABLEDATA } from '@/temp';
import { useFormik } from 'formik';
import { SELLINITIALVALUES } from '@/constants/auth';
import { SellFormSchema } from '@/schema';
import { SELLDATACOLUMNS } from '@/constants/consent';
import Table from './Table';

type UpdatedValues = {
  name: string | undefined;
  limitPrice?: number | undefined;
  amount?: number | undefined;
  total?: number | undefined;
};

function Main() {
  const [show, setShow] = useState(false);
  const [tableData, setTableData] = useState<UpdatedValues[]>([]);
  const pathname = usePathname();
  const title = pathname.split('/');
  const titleValue = title[title.length - 2];
  const data = DATATABLEDATA.find((item) => item.name === titleValue);
  let validation = true;
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue, isValid } = useFormik({
    initialValues: SELLINITIALVALUES,
    validationSchema: SellFormSchema,
    onSubmit: async (results, onSubmit) => {
      if (isValid && validation) {
        console.log(results);
        onSubmit.setSubmitting(false);
        const updatedValues = {
          ...values,
          name: data?.name,
        };
        setTableData([updatedValues]);
        setShow(true);
      }
    },
  });
  const handleMaxButtonClick = () => {
    setFieldValue('limitPrice', data?.limitPrice || '');
    const value = data?.limitPrice && data?.prices ? data?.limitPrice * data?.prices : 0;
    setFieldValue('total', value);
    const updatedValues = {
      ...values,
      name: data?.name,
    };
    setTableData([updatedValues]);
  };
  const handleLimitPriceChange = (e: any) => {
    const newLimitPrice = e.target.value;
    if (!Number.isNaN(newLimitPrice) && data?.prices) {
      const newTotal = newLimitPrice * data?.prices;
      console.log('newTotal', newTotal);
      setFieldValue('total', newTotal);
    } else {
      setFieldValue('total', 0.0);
    }
    handleChange(e);
  };
  const handleDelete = (index: number) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
    if (newTableData.length === 0) {
      setShow(false);
    }
  };
  return (
    <div className={`overflow-x-auto w-full h-full max-w-[${maxWidth}]`}>
      <h1 className="text-primary dark:text-main text-3xl font-bold font-sans mt-8 mb-7 justify-center items-center flex">
        {data?.name}
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-primary dark:text-main text-lg font-bold font-sans">Last Price (24H) : {data?.prices} $ </p>
        <Button
          className="bg-primary dark:bg-black text-white font-bold font-sans px-8 mx-4"
          title="Max"
          type="button"
          onClick={handleMaxButtonClick}
        />
      </div>
      <form className="flex flex-row flex-wrap gap-5 justify-center items-center" noValidate onSubmit={handleSubmit}>
        <div className="flex flex-row flex-wrap gap-x-14 gap-y-6 items-center justify-center">
          <Input
            label="Limit Data"
            placeholder="Limit Data"
            name="limitPrice"
            error={
              (touched.limitPrice &&
                (errors.limitPrice ||
                  (values.limitPrice && values.limitPrice > (data?.limitPrice || 0)
                    ? (validation = false)
                    : undefined))) ||
              (values.limitPrice && values.limitPrice > (data?.limitPrice || 0)
                ? 'Limit price should be less than or equal to the last price'
                : undefined)
            }
            value={values.limitPrice}
            className="max-w-[450px] w-full"
            max={data?.limitPrice}
            onChange={handleLimitPriceChange}
            type="number"
            min={0}
          />

          <Input
            label="Amount"
            placeholder="0.00"
            readOnly
            name="amount"
            error={touched.amount && errors.amount}
            value={`${data?.prices} $`}
            className="max-w-[450px] w-full"
            onChange={() => setFieldValue('amount', data?.price)}
          />

          <Input
            label="Total"
            placeholder="0.00"
            readOnly
            name="total"
            error={touched.total && errors.total}
            value={`${values.total} $`}
            className="max-w-[450px] w-full"
          />
        </div>

        <div className="flex gap-x-4 my-4 w-full justify-center items-center">
          <Button
            type="submit"
            className="bg-blue w-full disabled:bg-disabledBlue max-w-[250px]"
            title="Sell"
            disabled={!isValid}
            onClick={() => {
              setFieldValue('amount', data?.prices);
            }}
          />
          <Button
            type="submit"
            className="bg-blue w-full disabled:bg-disabledBlue max-w-[250px]"
            title="Cancel"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
      </form>
      {show && <Table data={tableData} columns={SELLDATACOLUMNS} handleDelete={handleDelete} />}
    </div>
  );
}

export default Main;
