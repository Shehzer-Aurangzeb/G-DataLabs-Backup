'use client';

import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { ResetPasswordFormSchema } from '@/schema';
import { RESETPASSWORDFORMINITIALVALUES, PATHS } from '@/constants';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';

function ResetPasswordForm() {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: RESETPASSWORDFORMINITIALVALUES,
    validationSchema: ResetPasswordFormSchema,

    onSubmit: async (results, onSubmit) => {
      // console.log('values', results);
      onSubmit.setSubmitting(false);
    },
  });
  return (
    <form className="flex flex-col gap-y-5" noValidate onSubmit={handleSubmit}>
      <Input
        label="Email"
        placeholder="JohnDoe@gmail.com"
        type="email"
        name="email"
        error={touched.email && errors.email}
        onChange={handleChange}
        value={values.email}
        className="w-full"
      />

      <Link href={PATHS.LOGIN} className="font-sans font-semibold text-base text-blue underline text-center">
        Go back to Login
      </Link>

      <Button type="submit" className="bg-blue w-full" title="Sign In" isLoading={false} />
    </form>
  );
}
export default ResetPasswordForm;
