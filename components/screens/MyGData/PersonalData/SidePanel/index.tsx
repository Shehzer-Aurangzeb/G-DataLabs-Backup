'use client';

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { PERSONALDATAINITIALVALUES } from '@/constants';
import { PersonalDataSchema } from '@/schema';
import Button from '@/components/UI/Button';
import CollapsableInput from './CollapsableInput';

function SidePanel() {
  const [emotionList, setEmotionList] = useState<{ [key: string]: string }>({
    initialKey: '',
  });
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = useFormik({
    initialValues: PERSONALDATAINITIALVALUES,
    validationSchema: PersonalDataSchema,

    onSubmit: async (results, onSubmit) => {
      console.log('values', results);
      onSubmit.setSubmitting(false);
    },
  });

  useEffect(() => {
    //* debouncing on state update
    const timer = setTimeout(() => {
      setFieldValue('emotionList', Object.values(emotionList));
    }, 400);
    return () => clearTimeout(timer);
  }, [emotionList, setFieldValue]);

  return (
    <form
      className="flex flex-col gap-y-3 h-full w-full overflow-y-auto max-w-[377px] bg-side rounded-md pl-4 pr-6 py-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <CollapsableInput
        value={values.date}
        type="date"
        onChange={handleChange}
        title="Date"
        name="date"
        error={touched.date && errors.date}
      />
      <CollapsableInput
        value={values.highTemp}
        onChange={handleChange}
        title="High Temperature (F)"
        name="highTemp"
        error={touched.highTemp && errors.highTemp}
      />
      <CollapsableInput
        value={values.lowTemp}
        onChange={handleChange}
        title="Low Temperature (F)"
        name="lowTemp"
        error={touched.lowTemp && errors.lowTemp}
      />
      <CollapsableInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setEmotionList((prev) => ({
            ...prev,
            [name]: value,
          }));
        }}
        title="Emotion List"
        fields={emotionList}
        addNewField={() => {
          setEmotionList((prev) => ({
            ...prev,
            [uuidv4()]: '',
          }));
        }}
        isAddingFieldEnabled
        error={touched.emotionList && errors.emotionList}
      />
      <CollapsableInput
        value={values.emotionOverall}
        onChange={handleChange}
        title="Emotion Overall"
        name="emotionOverall"
        error={touched.emotionOverall && errors.emotionOverall}
      />
      <CollapsableInput
        value={values.weatherType}
        onChange={handleChange}
        title="Weather Type"
        name="weatherType"
        error={touched.weatherType && errors.weatherType}
      />
      <CollapsableInput
        value={values.relFinanceStatus}
        onChange={handleChange}
        title="Rel_Finance Status"
        name="relFinanceStatus"
        error={touched.relFinanceStatus && errors.relFinanceStatus}
      />
      <CollapsableInput
        value={values.exerciseTotalTime}
        onChange={handleChange}
        title="Exercise Total Time"
        name="exerciseTotalTime"
        error={touched.exerciseTotalTime && errors.exerciseTotalTime}
      />
      <Button type="submit" className="bg-blue w-full" title="Save" />
      <Button type="button" className="bg-[#F5B11A] w-full" title="Save & enter new data" isLoading={false} />
    </form>
  );
}
export default SidePanel;
