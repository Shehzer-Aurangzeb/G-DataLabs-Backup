import React from 'react';
import Form from './Form';

function PersonalInformation() {
  return (
    <div className="mt-4 bg-lightGreen w-full pl-12 pr-8 py-7 mobile:px-2  rounded-md h-[calc(100%_-_6rem)] overflow-y-auto">
      <h1 className="text-primary text-2xl font-bold font-sans mb-7">Personal Information</h1>
      <Form />
    </div>
  );
}
export default PersonalInformation;
