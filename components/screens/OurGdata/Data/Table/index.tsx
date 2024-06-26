/* eslint-disable no-nested-ternary */
import { Column, useTable } from 'react-table';
import React, { useEffect } from 'react';
import { Columns } from '@/types';
import { useTheme } from '@/context/ThemeProvider';
import { LineChart } from '@/components/UI/LineChart2';
import { trade_icon } from '@/public/assets';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  data: any;
  columns: Column<Columns>[];
}

function Table({ columns, data }: IProps) {
  const { theme } = useTheme();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  useEffect(() => {
    // Add any side effects based on data changes if needed
  }, [data]);
  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th
                {...column.getHeaderProps()}
                className={`border-table dark:border-white border py-3 px-7 mobile:px-3 mobile:py-2 bg-table dark:bg-darkTable text-xl mobile:text-sm text-white font-medium font-sans whitespace-nowrap ${
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
            <tr {...row.getRowProps()} className="even:bg-[#d4d4d4]  dark:even:bg-[#6a6a6a] dark:odd:bg-darkChat">
              {row.cells.map((cell: any) => (
                <td
                  key={cell.id}
                  {...cell.getCellProps()}
                  className={`border border-[#ced4da] dark:border-white py-6 px-7 mobile:p-3 text-black  dark:text-main font-sans font-normal text-base mobile:text-sm text-center
                  `}
                >
                  {cell.column.id === 'graph' && (
                    <div className="max-w-[80px] justify-center items-center flex">
                      <LineChart data={row.original.chardata} color="green" />
                    </div>
                  )}
                  {cell.column.id === 'action' ? (
                    <Link
                      href={`/our_g-data/data/charts/${cell.row.original.name}`}
                      className="justify-center items-center flex"
                    >
                      <Image
                        src={trade_icon}
                        alt="alt"
                        className="cursor-pointer w-[25px] h-[25px] dark:invert-0 dark:brightness-100 dark:filter-1 dark:inset-0"
                        style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
                      />
                    </Link>
                  ) : (
                    cell.render('Cell')
                  )}
                  {/* <Actions
                    isAllowed={row.values.Consent !== 'FALSE'}
                    isDisabled={row.values.id === null}
                    onClick={() => {
                      // Add your action logic here
                    }}
                //   /> */}
                  {/* {cell.render('Cell')} */}
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
