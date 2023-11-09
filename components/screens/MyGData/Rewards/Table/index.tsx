import React, { useCallback, useEffect, useState } from 'react';
import { Column, useTable } from 'react-table';
import { Columns } from '@/types';
import Actions from '@/components/screens/MyGData/Actions';
import { createRewardsState } from '@/lib';
import { UpdateConsentRewardType } from '@/state/myGData/types';
import Input from '../Input';

interface IProps {
  data: any;
  columns: Column<Columns>[];
  updateConsentRewards: (arg: { id: number; payload: UpdateConsentRewardType }) => void;
}

function Table({ columns, data, updateConsentRewards }: IProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const [PDefinedValue, setPDefinedValue] = useState(createRewardsState(data));
  const [recordID, setRecordID] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setPDefinedValue((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        demanded_reward_value: Number(Number(value).toFixed(3)),
      },
    }));
    setRecordID(id);
  };

  const handleConsetUpdate = useCallback(
    (Id: string) => {
      const recordConsent = PDefinedValue[Id];
      updateConsentRewards({
        id: Number(Id),
        payload: {
          consents_to_sell: !recordConsent.consents_to_sell,
        },
      });
    },
    [updateConsentRewards, PDefinedValue],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!recordID) return;
      updateConsentRewards({ id: Number(recordID), payload: PDefinedValue[recordID] });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [PDefinedValue, recordID, updateConsentRewards]);

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any, columnIndex: number) => (
              <th
                {...column.getHeaderProps()}
                className={`border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap ${
                  columnIndex === headerGroup.headers.length - 1 && 'hidden'
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
                  className={`border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active dark:bg-darkChat dark:text-main text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap ${
                    cellIndex === row.cells.length - 1 && 'hidden'
                  }`}
                >
                  {cellIndex === 0 && cell.render('Cell')}
                  {cellIndex === 1 && (
                    <Actions
                      isAllowed={row.values.Consent !== 'FALSE'}
                      onClick={() => handleConsetUpdate(row.values.id)}
                    />
                  )}
                  {cellIndex === 2 && (
                    <Input
                      name={row.values.id}
                      id={row.values.id}
                      readOnly={false}
                      value={PDefinedValue[row.values.id].demanded_reward_value?.toString()}
                      onChange={handleChange}
                    />
                  )}
                  {cellIndex === 3 && (
                    <Input
                      name={`OtherCompValue-${row.values.id}`}
                      id={`OtherCompValue-${row.values.id}`}
                      readOnly
                      value={row.values.OtherCompValue}
                    />
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
