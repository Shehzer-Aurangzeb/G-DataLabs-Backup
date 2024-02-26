/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-named-as-default

import { useTable } from 'react-table';
import React, { useEffect, useState } from 'react';
// import { Columns } from '@/types';
import { useTheme } from '@/context/ThemeProvider';
import Modal from '@/components/UI/Modal';
import { delete_icon } from '@/public/assets';
import Image from 'next/image';
import buy_icon from '@/public/icons/dollar.gif';

interface IProps {
  data: any;
  columns: any;
  handleDelete?: (index: number) => void;
  handleBuy?: ((index: number) => void | undefined) | undefined;
}

function Table({ columns, data, handleDelete, handleBuy }: IProps) {
  const { theme } = useTheme();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleDeleteClick = () => {
    if (handleDelete) {
      handleDelete(index);
      closeModal();
    }
  };
  const handleBuyClick = () => {
    if (handleBuy) {
      handleBuy(index);
      closeModal();
    }
  };
  useEffect(() => {
    // Add any side effects based on data changes if needed
  }, [data]);
  return (
    <>
      {handleBuy && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          handleActionClick={handleBuyClick}
          handleAction={handleBuyClick}
          title="Do you Really want to Buy"
        />
      )}
      {handleDelete && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          handleActionClick={handleDeleteClick}
          handleAction={handleDelete}
          title="Are you sure to Delete"
        />
      )}

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
                    {cell.column.id === 'action' ? (
                      <button
                        className=""
                        type="submit"
                        onClick={() => {
                          setIndex(row.index);
                          openModal();
                        }}
                      >
                        <Image
                          src={delete_icon}
                          alt="alt"
                          className="cursor-pointer w-[25px] h-[25px] dark:invert-0 dark:brightness-100 dark:filter-1 dark:inset-0"
                          style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
                        />
                      </button>
                    ) : cell.column.id === 'buy' ? (
                      <button
                        className=""
                        type="submit"
                        onClick={() => {
                          setIndex(row.index);
                          openModal();
                        }}
                      >
                        <Image
                          src={buy_icon}
                          alt="alt"
                          className="cursor-pointer w-[25px] h-[25px] dark:invert-0 dark:brightness-100 dark:filter-1 dark:inset-0"
                          style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
                        />
                      </button>
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
    </>
  );
}

export default Table;
