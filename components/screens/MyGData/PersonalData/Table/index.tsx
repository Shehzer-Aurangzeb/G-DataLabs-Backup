import React from 'react';
import { Column, useTable } from 'react-table';
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
              {row.cells.map((cell: any) => (
                <td
                  {...cell.getCellProps()}
                  className="border border-[#ced4da] py-4  bg-active text-black font-sans font-normal text-base text-center whitespace-nowrap px-7"
                >
                  {cell.column.id === 'emotions'
                    ? row.values.emotions.map((emt: string) => <p>{emt}</p>)
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