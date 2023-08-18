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
                className="border-table border py-3 bg-table text-xl text-white font-medium font-sans whitespace-nowrap px-7"
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
                  className="border border-[#ced4da] py-6  bg-active text-black font-sans font-normal text-base text-center whitespace-nowrap px-7"
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
