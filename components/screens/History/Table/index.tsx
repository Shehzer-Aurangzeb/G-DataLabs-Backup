import React from 'react';
import { Column, useTable, useSortBy } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import Image from '@/components/UI/StyledImage';
import { Columns } from '@/types';

interface IProps {
  data: any;
  columns: Column<Columns>[];
}

function Table({ columns, data }: IProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );
  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())} // Enable sorting
                className={
                  column.Header === 'Answers'
                    ? 'w-[800px] border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap'
                    : 'border-table border py-3 px-7 mobile:px-3 mobile:py-2 bg-table text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap'
                }
              >
                {column.render('Header')}
                <span>{column.isSorted ? ' 🔽' : ' 🔼'}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            /* eslint-disable */
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td
                  {...cell.getCellProps()}
                  className="border border-[#ced4da] py-6 px-7 mobile:p-3 bg-active text-black font-sans font-normal text-base mobile:text-sm text-center whitespace-nowrap"
                >
                  {cell.column.Header === 'Image'
                    ? cell.value.length > 0
                      ? cell.value.map((image: string, index: number) => (
                          <Image
                            key={uuidv4()}
                            src={image}
                            alt={`response-image-${index}`}
                            className="my-3 w-[120px] h-[120px]"
                          />
                        ))
                      : '-'
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
