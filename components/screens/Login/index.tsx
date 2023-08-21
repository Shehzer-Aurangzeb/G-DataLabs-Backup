import React from 'react';
import LoginForm from './Form';

function Main() {
  return (
    <div className="absolute-center w-full max-w-[450px]">
      <h1 className="text-3xl font-sans font-bold text-primary mb-5">Sign in to G-Data Labs</h1>
      <LoginForm />
    </div>
  );
}
export default Main;
