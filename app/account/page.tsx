import Container from '@/components/UI/Containers';
import Header from '@/components/screens/Account/Header';
import PersonalInformation from '@/components/screens/Account/PersonalInformation';
import React from 'react';

export default function Account() {
  return (
    <Container type="main" className="py-12 px-10 rounded-r-lg">
      <Header />
      <PersonalInformation />
    </Container>
  );
}