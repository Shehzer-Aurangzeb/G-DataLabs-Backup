'use client';

import React, { useMemo } from 'react';
import Container from '@/components/UI/Containers';
import Table from '@/components/UI/Table';
import { consentData } from '@/temp';
import { CONSENTTABLECOLUMNS } from '@/constants';

export default function Consent() {
  const data = useMemo(
    () =>
      consentData.map((item) => ({
        PDataAndWeb: item.PDataAndWeb,
        Definition: item.Definition,
        Companies: item.Companies,
        Use: item.Use,
        Consent: item.Consent,
      })),
    [],
  );
  return (
    <Container type="main" className="p-12 rounded-r-lg">
      <Table data={data} columns={CONSENTTABLECOLUMNS} />
    </Container>
  );
}
