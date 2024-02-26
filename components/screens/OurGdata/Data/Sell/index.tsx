/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-return-assign  */

'use client';

import React, { useState, useEffect } from 'react';
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
  const [total, setTotal] = useState(0);
  const data = DATATABLEDATA.find((item) => item.name === titleValue);
  let validation = true;

  const { handleSubmit, handleChange, values, touched, errors, setFieldValue, isValid } = useFormik({
    initialValues: {
      ...SELLINITIALVALUES,
      amount: data?.prices,
    },
    validationSchema: SellFormSchema,
    onSubmit: async (results, onSubmit) => {
      if (isValid && validation) {
        console.log('result', results);
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
  useEffect(() => {
    const newTotal = values?.amount && values.limitPrice && (values.amount * values.limitPrice || 0);
    setTotal(newTotal || 0);
  }, [values?.amount, values?.limitPrice]);

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
    handleChange(e); // Update values asynchronously
    setTimeout(() => {
      const newLimitPrice = e.target.value;

      if (!Number.isNaN(newLimitPrice) && values?.amount) {
        const newTotal = newLimitPrice * values?.amount;
        console.log('newTotal', newTotal);
        setFieldValue('total', newTotal);
      } else {
        setFieldValue('total', 0.0);
      }
    }, 0);
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
          className="bg-primary dark:bg-black dark:text-white font-bold font-sans px-8 mx-4 bg-slate-600 text-black"
          title="Max"
          type="button"
          onClick={handleMaxButtonClick}
        />
      </div>
      <form className="flex flex-col gap-5 justify-center items-center" noValidate onSubmit={handleSubmit}>
        <div className="flex flex-col flex-wrap gap-x-14 gap-y-6 items-center justify-center">
          <Input
            label="Unit"
            placeholder="0.00"
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
            label="Amount ($)"
            placeholder="0.00"
            name="amount"
            error={touched.amount && errors.amount}
            value={values.amount}
            className="max-w-[450px] w-full"
            onChange={(e) => {
              const newAmount = e.target.value;
              handleChange(e);
              setFieldValue('amount', newAmount); // Update values.amount
            }}
          />

          <Input
            label="Total"
            placeholder="0.00"
            readOnly
            name="total"
            error={touched.total && errors.total}
            value={`${total} $`}
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
              setFieldValue('total', total);
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
