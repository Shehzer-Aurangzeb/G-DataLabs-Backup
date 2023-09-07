import { Column, useTable } from 'react-table';
import React from 'react';
import { Columns } from '@/types';
import Actions from '@/components/screens/MyGData/Actions';
import { UpdateConsentRewardType } from '@/state/myGData/types';

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
  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                key={column.id}
                {...column.getHeaderProps()}
                className={`border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap ${
                  column.id === 'id' && 'hidden'
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
                  className={`border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap
                  ${cellIndex === row.cells.length - 1 && 'hidden'}`}
                >
                  {cellIndex === row.cells.length - 2 ? (
                    <Actions
                      isAllowed={row.values.Consent !== 'FALSE'}
                      onClick={() => {
                        updateConsentRewards({
                          id: row.values.id,
                          payload: {
                            consents_to_sell: row.values.Consent !== 'TRUE',
                          },
                        });
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
