'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Form from './Form';

function PersonalInformation() {
  const { user, updateUser, isLoading } = useAuth();
  return (
    <div className="mt-4 bg-lightGreen w-full pl-12 pr-8 py-7 mobile:px-2  rounded-md h-[calc(100%_-_6rem)] overflow-y-auto relative max-w-[1450px]">
      <h1 className="text-primary text-2xl font-bold font-sans mb-7">Personal Information</h1>
      {user && <Form user={user} updateUser={updateUser} isLoading={isLoading} />}
    </div>
  );
}
export default PersonalInformation;
