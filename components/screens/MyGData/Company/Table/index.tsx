import { Column, useTable } from 'react-table';
import React, { useCallback, useEffect, useState } from 'react';
import { Columns, UpdateCompanyConsentPayload } from '@/types';
import Actions from '@/components/screens/MyGData/Actions';
import Input from '@/components/screens/MyGData/Rewards/Input';
import { createCompanyState } from '@/lib';

interface IProps {
  data: any;
  columns: Column<Columns>[];
  updateConsentRewards: (payload: UpdateCompanyConsentPayload) => void;
}

function Table({ columns, data, updateConsentRewards }: IProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const [values, setValues] = useState(createCompanyState(data));
  const [recordID, setRecordID] = useState('');

  console.log('values :>> ', values);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: 'Use' | 'Pricing') => {
    const { value, id } = e.target;
    const recordId = id.split('-')[1];
    if (name === 'Pricing' && /^\d*\.?\d*$/.test(value) === false) return;
    setValues((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [recordId]: {
          ...prev[name][recordId],
          value: Number(Number(value).toFixed(3)),
        },
      },
    }));
    setRecordID(recordId);
  };

  const handleConsetUpdate = useCallback(
    (name: string) => {
      const recordConsent = values.Use[name].consents_to_sell;
      updateConsentRewards([
        {
          demanded_reward_value: Number(values.Pricing[name].value),
          usage: values.Use[name].value ?? '',
          consents_to_buy: !recordConsent,
          personal_data_field: {
            field_name: name,
          },
        },
      ]);
    },
    [updateConsentRewards, values],
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!recordID) return;
      updateConsentRewards([
        {
          demanded_reward_value: Number(values.Pricing[recordID].value),
          usage: values.Use[recordID].value ?? '',
          consents_to_buy: !values.Use[recordID].consents_to_sell,
          personal_data_field: {
            field_name: recordID,
          },
        },
      ]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [values, recordID, updateConsentRewards]);
  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps()}
                className={`border-table dark:border-white border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap ${
                  column.id === 'fieldName' && 'hidden'
                }`}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any, cellIndex: number) => (
                <td
                  key={cell.id}
                  {...cell.getCellProps()}
                  className={`border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap
                  ${cellIndex === row.cells.length - 1 && 'hidden'}`}
                >
                  {cellIndex === 2 && (
                    <Input
                      name={`Use-${row.values.fieldName}`}
                      type="text"
                      value={values.Use[row.values.fieldName] ? values.Use[row.values.fieldName].value : ''}
                      onChange={(e) => handleChange(e, 'Use')}
                      className="min-w-[160px]"
                    />
                  )}
                  {cellIndex === 3 && (
                    <Input
                      name={`Pricing-${row.values.fieldName}`}
                      type="text"
                      pattern="\d*\.?\d*"
                      value={values.Pricing[row.values.fieldName] ? values.Pricing[row.values.fieldName].value : ''}
                      onChange={(e) => handleChange(e, 'Pricing')}
                      className="min-w-[160px]"
                    />
                  )}

                  {cellIndex === row.cells.length - 2 ? (
                    <Actions
                      isAllowed={row.values.Consent !== 'FALSE'}
                      onClick={() => {
                        handleConsetUpdate(row.values.fieldName);
                      }}
                    />
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
