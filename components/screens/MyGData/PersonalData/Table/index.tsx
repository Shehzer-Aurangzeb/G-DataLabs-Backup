import React from 'react';
import { Column, useTable } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import { Columns } from '@/types';

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
              {row.cells.map((cell: any) => (
                <td
                  {...cell.getCellProps()}
                  className="border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap"
                >
                  {cell.column.id === 'emotions'
                    ? row.values.emotions.map((emt: string) => <p key={uuidv4()}>{emt}</p>)
                    : cell.render('Cell')}
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
