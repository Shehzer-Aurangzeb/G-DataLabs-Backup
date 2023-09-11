import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { PERSONALDATAINITIALVALUES } from '@/constants';
import { PersonalDataSchema, PersonalDataSchemaType } from '@/schema';
import Button from '@/components/UI/Button';
import { useWeatherState } from '@/state/weather/hooks';
import CollapsableInput from './CollapsableInput';

type TProps = {
  isLoading: boolean;
  savePersonalData: (payload: PersonalDataSchemaType) => void;
};

function SidePanel({ savePersonalData, isLoading }: TProps) {
  const [emotionList, setEmotionList] = useState<{ [key: string]: string }>({
    initialKey: '',
  });
  const { weather } = useWeatherState();
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } = useFormik({
    initialValues: {
      ...PERSONALDATAINITIALVALUES,
      high_temperature: weather ? weather.highestTemperature : 0,
      low_temperature: weather ? weather.lowestTemperature : 0,
    },
    validationSchema: PersonalDataSchema,

    onSubmit: async (results, onSubmit) => {
      savePersonalData(results);
      onSubmit.setSubmitting(false);
    },
  });

  useEffect(() => {
    //* debouncing on state update
    const timer = setTimeout(() => {
      setFieldValue('emotional_list', Object.values(emotionList));
    }, 400);
    return () => clearTimeout(timer);
  }, [emotionList, setFieldValue]);
  return (
    <form
      className="flex flex-col gap-y-3 w-full overflow-y-auto max-w-[377px] bg-side rounded-md pl-4 pr-6 py-6 mobile:max-w-full mobile:"
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
        value={values.high_temperature}
        type="number"
        onChange={handleChange}
        title="High Temperature (C)"
        name="high_temperature"
        error={touched.high_temperature && errors.high_temperature}
      />
      <CollapsableInput
        value={values.low_temperature}
        type="number"
        onChange={handleChange}
        title="Low Temperature (C)"
        name="low_temperature"
        error={touched.low_temperature && errors.low_temperature}
      />
      <CollapsableInput
        value={values.weather}
        onChange={handleChange}
        title="Weather Type"
        name="weather"
        error={touched.weather && errors.weather}
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
        error={touched.emotional_list && errors.emotional_list}
      />
      <CollapsableInput
        value={values.emotional_overall}
        onChange={handleChange}
        title="Emotion Overall"
        name="emotional_overall"
        error={touched.emotional_overall && errors.emotional_overall}
      />

      <CollapsableInput
        value={values.relative_finance_status}
        onChange={handleChange}
        title="Relative Finance Status"
        name="relative_finance_status"
        error={touched.relative_finance_status && errors.relative_finance_status}
      />
      <CollapsableInput
        value={values.exercise_time}
        onChange={handleChange}
        type="number"
        title="Exercise Total Time (min)"
        name="exercise_time"
        error={touched.exercise_time && errors.exercise_time}
      />
      <Button type="button" className="bg-blue w-full disabled:bg-disabledBlue" title="Save" isLoading={false} />
      <Button
        type="submit"
        className="bg-[#F5B11A] w-full disabled:bg-[#f5b01aa7]"
        title="Save & enter new data"
        isLoading={isLoading}
      />
    </form>
  );
}
export default SidePanel;
