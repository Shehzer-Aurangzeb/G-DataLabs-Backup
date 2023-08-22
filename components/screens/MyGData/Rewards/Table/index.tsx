import React from 'react';
import { Column, useTable } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import { Columns } from '@/types';
import Actions from '@/components/screens/MyGData/Actions';
import Input from '../Input';

interface IProps {
  data: any;
  columns: Column<Columns>[];
}

function Table({ columns, data }: IProps) {
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
                {...column.getHeaderProps()}
                className="border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap"
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
                  {...cell.getCellProps()}
                  className="border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap"
                >
                  {cellIndex === 0 && cell.render('Cell')}
                  {cellIndex === 1 && <Actions isAllowed={row.values.Consent !== 'false'} />}
                  {cellIndex === 2 && (
                    <Input
                      name={`PDefinedValue-${uuidv4()}`}
                      readOnly={false}
                      value={row.values.PDefinedValue}
                      onChange={() => {}}
                    />
                  )}
                  {cellIndex === 3 && (
                    <Input name={`OtherCompValue-${uuidv4()}`} readOnly value={row.values.OtherCompValue} />
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
