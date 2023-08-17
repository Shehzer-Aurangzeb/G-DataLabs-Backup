'use client';
import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import { PersonalInfoSchema } from '@/schema';
import { PERSONALINFOINITIALVALUES } from '@/constants';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import CardInformation from './CardInformation';
import UploadPicture from './UploadPicture';
function Form() {
  const [profile, setProfile] = useState<File | null>(null);
  const [profileUrl, setProfileUrl] = useState<string>('');
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: PERSONALINFOINITIALVALUES,
    validationSchema: PersonalInfoSchema,

    onSubmit: async (values, onSubmit) => {
      console.log('values', values);
      onSubmit.setSubmitting(false);
    },
  });
  return (
    <form className="flex flex-col w-full" noValidate onSubmit={handleSubmit}>
      <div className="flex flex-row flex-wrap gap-x-14 gap-y-6">
        <UploadPicture handleChange={handleProfileChange} profile={profileUrl} />
        <Input
          label="First Name"
          placeholder="John Doe"
          name="firstName"
          error={touched.firstName && errors.firstName}
          onChange={handleChange}
          value={values.firstName}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Email"
          placeholder="JohnDoe@gmail.com"
          type="email"
          name="email"
          error={touched.email && errors.email}
          onChange={handleChange}
          value={values.email}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Last Name"
          placeholder="John Doe"
          name="lastName"
          error={touched.lastName && errors.lastName}
          onChange={handleChange}
          value={values.lastName}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Password"
          placeholder="Password123"
          name="password"
          error={touched.password && errors.password}
          onChange={handleChange}
          value={values.password}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Username"
          placeholder="John Doe"
          name="username"
          error={touched.username && errors.username}
          onChange={handleChange}
          value={values.username}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Phone"
          placeholder="921258565656"
          name="phone"
          type="number"
          error={touched.phone && errors.phone}
          onChange={handleChange}
          value={values.phone}
          className="max-w-[450px] w-full"
        />
        <Input
          label="Total Rewards"
          placeholder="50"
          name="totalRewards"
          type="number"
          error={touched.totalRewards && errors.totalRewards}
          onChange={handleChange}
          value={values.totalRewards}
          isMonetaryInput={true}
          currency="$"
          className="max-w-[450px] w-full"
        />

        <CardInformation values={values} touched={touched} errors={errors} handleChange={handleChange} />
        <div className="w-full flex flex-row items-center justify-end gap-x-4 mt-10">
          <Button
            type="button"
            className="bg-chat max-w-[230px] w-full"
            title="Cancel"
            onClick={() => {}}
            isLoading={false}
          />
          <Button type="submit" className="bg-blue max-w-[230px] w-full" title="Save" isLoading={false} />
        </div>
      </div>
    </form>
  );
}
export default Form;