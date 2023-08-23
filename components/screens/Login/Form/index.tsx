'use client';

import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { LoginFormSchema } from '@/schema';
import { LOGINFORMINITIALVALUES, PATHS } from '@/constants';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import { useAuth } from '@/hooks/useAuth';

function LoginForm() {
  const { loginUser, isLoading } = useAuth();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: LOGINFORMINITIALVALUES,
    validationSchema: LoginFormSchema,

    onSubmit: async (results, onSubmit) => {
      // console.log('values', results);
      loginUser(results);
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
      <Input
        label="Password"
        placeholder="Password123"
        name="password"
        error={touched.password && errors.password}
        onChange={handleChange}
        value={values.password}
        className="w-full"
      />
      <p className="text-primary font-sans font-semibold text-base">
        {' '}
        Don&apos;t have an account?
        <Link href={PATHS.SIGNUP} className="text-blue underline ml-1">
          Click here to Sign up
        </Link>
      </p>

      <Button type="submit" className="bg-blue w-full" title="Sign In" isLoading={isLoading} />

      <Link href={PATHS.RESETPASSWORD} className="text-blue underline text-center font-sans font-semibold text-base">
        Forgot Password?
      </Link>
    </form>
  );
}
export default LoginForm;
